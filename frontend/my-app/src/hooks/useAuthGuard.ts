import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuthGuard() {
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("로그인이 필요합니다");
        router.replace("/auth/signin");
        return;
      }

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error();

        await res.json();
      } catch (err) {
        alert("로그인이 필요합니다");
        localStorage.removeItem("accessToken");
        router.replace("/auth/signin");
      }
    };

    verifyToken();
  }, [router]);
}
