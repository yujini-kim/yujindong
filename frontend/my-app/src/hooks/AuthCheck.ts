// src/hooks/useAuthCheck.ts
import { useEffect } from "react";
import { useAuthStore } from "@/store/AuthCheckStore";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export function useAuthCheck() {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const res = await fetch(`${BASE_URL}/verify`, {
          credentials: "include",
        });
        setIsLoggedIn(res.ok);
      } catch (err) {
        setIsLoggedIn(false);
        console.error("로그인 확인 실패:", err);
      }
    };

    verifyLogin();
  }, [setIsLoggedIn]);
}
