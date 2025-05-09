"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-20 px-12 flex items-center justify-between bg-white shadow-md">
      <Link href={"/"}>
        <img src="/logo.png" className="w-10" />
      </Link>
      <ul className="flex gap-8 text-base font-medium">
        <li>
          <Link href="/analyze">분석하기</Link>
        </li>
        <li>
          <Link href="/mypage">마이페이지</Link>
        </li>
        <li>
          <Link href="/login">로그인</Link>
        </li>
        {/* <li>
          {isLoggedIn ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <Link href="/login">로그인</Link>
          )}
        </li> */}
      </ul>
    </nav>
  );
}
