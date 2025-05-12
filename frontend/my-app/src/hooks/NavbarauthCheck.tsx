import { useAuthStore } from "@/store/AuthCheckStore";
import { useEffect } from "react";

export function NavbarauthCheck() {
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
        console.log("🔵 응답 상태 코드:", res.status);
        if (!res.ok) throw new Error();

        const data = await res.text();
        console.log("✅ 응답 데이터:", data);
        setIsLoggedIn(true);
      } catch (err) {
        console.log("❌ 인증 실패:", err);
        setIsLoggedIn(false);
      }
    };

    verifyToken();
  }, []);
}
