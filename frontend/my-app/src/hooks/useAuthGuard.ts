import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";

export function useAuthGuard() {
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify`, {
          credentials: "include",
        });

        if (!res.ok) throw new Error();

        await res.json();
      } catch (err) {
        alert("로그인이 필요합니다");
        deleteCookie("accessToken");
        router.replace("/auth/signin");
      }
    };

    verifyToken();
  }, [router]);
}
