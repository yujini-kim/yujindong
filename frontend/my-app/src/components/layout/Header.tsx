"use client";

import { usePathname } from "next/navigation";
import ExitIcon from "../icons/ExitIcon";

function Header() {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    "/": "홈페이지",
    "/analyze": "축의금 분석기",
    "/mypage": "마이페이지",
    "/auth/signup": "회원가입",
    "/auth/signin": "로그인",
  };

  const pageTitle = titleMap[pathname] || "*";

  return (
    <div className="grid grid-cols-6 items-center p-4">
      <ExitIcon />
      <p className="text-2xl col-span-4 text-center">{pageTitle}</p>
    </div>
  );
}

export default Header;
