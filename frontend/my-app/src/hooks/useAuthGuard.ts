import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuthGuard() {
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verify`, {
          credentials: "include",
        });

        if (!res.ok) throw new Error();

        await res.json();
      } catch (err) {
        alert("로그인이 필요합니다");
        router.replace("/auth/signin");
      }
    };

    verifyToken();
  }, [router]);
}
