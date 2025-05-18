// hooks/AuthCheck.ts
"use client";

import { useRouter } from "next/navigation";
import { useAdminCheckStore, useAuthStore } from "@/store/AuthCheckStore";
import { useEffect } from "react";

export function useAuthCheck() {
  const router = useRouter();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/verify`,
          {
            credentials: "include",
          }
        );
        setIsLoggedIn(true);

        if (!res.ok) throw new Error();

        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log("❌ 마이페이지 인증 실패:", err);
        alert("로그인이 필요합니다");
        router.replace("/login");
      }
    };

    verifyToken();
  }, [router]);
}

export const fetchUserRoles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verify`, {
    credentials: "include",
  });

  const { setIsAdmin } = useAdminCheckStore.getState();

  if (res.ok) {
    const data = await res.json();
    setIsAdmin(data.admin);
  }
};
