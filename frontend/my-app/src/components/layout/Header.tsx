"use client";

import { usePathname } from "next/navigation";
import ExitIcon from "../icons/ExitIcon";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { LoginBtn, LogoutBtn } from "../ui/auth/LoginBtn";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: white;
`;

const PageTitle = styled.p`
  font-size: 1.5rem;
  grid-column: span 4 / span 4;
  text-align: center;
`;

function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setToken(localStorage.getItem("accessToken"));
  }, []);

  const titleMap: Record<string, string> = {
    "/": "홈페이지",
    "/analyze": "축의금 분석기",
    "/mypage": "마이페이지",
    "/auth/signup": "회원가입",
    "/auth/signin": "로그인",
  };

  const pageTitle = titleMap[pathname] || "*";

  const deleteToken = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  if (!isMounted) return null;

  return (
    <HeaderWrapper>
      <ExitIcon />
      <PageTitle>{pageTitle}</PageTitle>
      {token ? <LogoutBtn onClick={deleteToken} /> : <LoginBtn />}
    </HeaderWrapper>
  );
}

export default Header;
