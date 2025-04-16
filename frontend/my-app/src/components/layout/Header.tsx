"use client";

import { usePathname } from "next/navigation";
import ExitIcon from "../svg/ExitIcon";

function Header() {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    "/": "홈페이지",
    "/analyze": "축의금 분석기",
    "/mypage": "마이페이지",
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
