"use client";

import DetailView from "@/components/ui/mypage/DetailView";
import ListCard from "@/components/ui/mypage/ListCard";
import { useMyPageQuery } from "@/hooks/MypageData";
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
  margin-bottom: 28px;
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

function Mypage() {
  const { data: pagedata, isLoading, isError, error } = useMyPageQuery();
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  console.log(pagedata);
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsClick((pre) => !pre);
  };

  const handleDetail = (idx: number) => {
    setIsClick((pre) => !pre);
    setSelectedIdx(idx);
  };

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
        alert("로그인이 필요합니다");
        localStorage.removeItem("accessToken");
        router.replace("/auth/signin");
      });
  }, [router]);

  if (!mounted || !isAuth) return null;
  if (isLoading) {
    <div>로딩중</div>;
  }
  return (
    <Wrapper>
      {pagedata?.items.map((item, idx) => {
        console.log("idx 확인 👀", idx);
        return (
          <Card onClick={() => handleDetail(idx)} key={idx}>
            <ListCard
              idx={idx}
              recommendation={item.recommendation}
              score={item.score}
            />
          </Card>
        );
      })}
      {isClick && selectedIdx !== null && pagedata && (
        <Overlay onClick={handleOverlayClick}>
          <DetailView
            idx={selectedIdx}
            recommendation={pagedata.items[selectedIdx].recommendation}
            score={pagedata.items[selectedIdx].score}
            text={pagedata.items[selectedIdx].text!}
            summary={pagedata.items[selectedIdx].summary}
          />
        </Overlay>
      )}
    </Wrapper>
  );
}

export default Mypage;
