import { useAuthStore } from "@/store/AuthCheckStore";
import Link from "next/link";
import { SetStateAction } from "react";

interface IListProps {
  logout: () => Promise<void>;
}
interface IDeskTopListProps {
  logout: () => Promise<void>;
  setIsMenuOpen: (value: SetStateAction<boolean>) => void;
}
export function DeskTopList({ logout }: IListProps) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <ul className="lg:flex gap-8 text-base font-medium hidden">
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
  );
}

export function MobileList({ logout, setIsMenuOpen }: IDeskTopListProps) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <ul className="flex flex-col items-center gap-2 py-4 lg:hidden">
      <li>
        <Link href="/analyze" onClick={() => setIsMenuOpen(false)}>
          분석하기
        </Link>
      </li>
      <li>
        <Link href="/mypage" onClick={() => setIsMenuOpen(false)}>
          마이페이지
        </Link>
      </li>
      <li>
        {isLoggedIn ? (
          <button onClick={logout}>로그아웃</button>
        ) : (
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            로그인
          </Link>
        )}
      </li>
    </ul>
  );
}
