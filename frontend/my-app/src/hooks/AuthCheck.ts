// hooks/AuthCheck.ts
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/verify`,
          {
            credentials: "include",
          },
        );
        console.log("🔵 마이페이지 응답 상태 코드:", res.status);
        if (!res.ok) throw new Error();

        const data = await res.text();
        console.log("✅ 마이페이지 응답 데이터:", data);
      } catch (err) {
        console.log("❌ 마이페이지 인증 실패:", err);
        alert("로그인이 필요합니다");
        router.replace("/login");
      }
    };

    verifyToken();
  }, [router]);
}
