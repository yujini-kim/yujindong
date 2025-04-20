"use client";

import DetailView from "@/components/ui/mypage/DetailView";
import ListCard from "@/components/ui/mypage/ListCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
  position: relative;
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 20px;
  max-width: 294px;
  width: 294px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
`;

const data = [
  { number: "01", name: "햄버거", recommend: 50000, score: 24 },
  { number: "02", name: "피자", recommend: 70000, score: 65 },
  { number: "03", name: "족발", recommend: 30000, score: 80 },
  { number: "04", name: "보쌈", recommend: 100000, score: 100 },
  { number: "05", name: "닭발", recommend: 70000, score: 70 },
];

function Mypage() {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsClick((pre) => !pre);
  };

  const handleDetail = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsClick((pre) => !pre);
  };

  console.log(isClick);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.replace("/auth/signin");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => setIsAuth(true))
      .catch(() => {
        alert("로그인 정보가 만료되었어요.");
        localStorage.removeItem("accessToken");
        router.replace("/auth/signin");
      });
  }, [router]);

  if (!mounted || !isAuth) return null;

  return (
    <Wrapper>
      {data.map((item) => (
        <Card onClick={handleDetail}>
          <ListCard
            key={item.number}
            number={item.number}
            recommendation={item.recommend}
            score={item.score}
          />
        </Card>
      ))}
      {isClick && (
        <Overlay onClick={handleOverlayClick}>
          <DetailView onClick={() => handleDetail} />
        </Overlay>
      )}
    </Wrapper>
  );
}

export default Mypage;
