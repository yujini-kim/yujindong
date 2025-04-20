"use client";

import ResultCircle from "@/components/ui/Result/ResultCircle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 20px;
  max-width: 294px;
  width: 294px;
`;

const Number = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const Text = styled.h2`
  font-size: 13px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const data = [
  {
    number: "01",
    name: "햄버거",
    recommend: 50000,
  },
  {
    number: "02",
    name: "피자",
    recommend: 70000,
  },
  {
    number: "03",
    name: "족발",
    recommend: 30000,
  },
  {
    number: "04",
    name: "보쌈",
    recommend: 100000,
  },
  {
    number: "05",
    name: "닭발",
    recommend: 70000,
  },
];

function Mypage() {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

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
  }, []);

  return (
    <Wrapper>
      {data.map((data) => (
        <Card>
          <TextBox>
            <Number>{data.number}</Number>
            <Text>
              상대방 : {data.name}
              <br /> 추천축의금:{data.recommend}원
            </Text>
          </TextBox>
          <ResultCircle score={75} />
        </Card>
      ))}
    </Wrapper>
  );
}

export default Mypage;
