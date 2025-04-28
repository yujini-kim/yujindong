"use client";

import { usePathname } from "next/navigation";
import ExitIcon from "../icons/ExitIcon";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { LoginBtn, LogoutBtn } from "../ui/auth/LoginBtn";
import { useAuthStore } from "@/store/authStore";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: ${(props) => props.theme.bgColor};
`;

const PageTitle = styled.p`
  font-size: 1.5rem;
  grid-column: span 4 / span 4;
  text-align: center;
`;

function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const token = useAuthStore((state) => state.token);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const titleMap: Record<string, string> = {
    "/": "홈페이지",
    "/analyze": "축의금 분석기",
    "/mypage": "마이페이지",
    "/auth/signup": "회원가입",
    "/auth/signin": "로그인",
  };

  let pageTitle = titleMap[pathname] || "*";
  if (pathname.startsWith("/result/")) {
    pageTitle = "분석결과";
  }

  const router = useRouter();

  const logout = () => {
    deleteCookie("accessToken");
    router.replace("/auth/signin");
  };

  if (!isMounted) return null;

  return (
    <HeaderWrapper>
      <ExitIcon />
      <PageTitle>{pageTitle}</PageTitle>
      {token ? <LogoutBtn onClick={logout} /> : <LoginBtn />}
    </HeaderWrapper>
  );
}

export default Header;
