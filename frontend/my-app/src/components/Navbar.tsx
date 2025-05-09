"use client";

import { useAuthCheck } from "@/hooks/AuthCheck";
import { useLogout } from "@/hooks/AuthMutation";
import { useAuthStore } from "@/store/AuthCheckStore";
import Link from "next/link";

export default function Navbar() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useLogout();
  return (
    <nav className="fixed top-0 left-0 w-full h-20 px-12 flex items-center justify-between bg-white shadow-md z-50">
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
          {isLoggedIn ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <Link href="/login">로그인</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
