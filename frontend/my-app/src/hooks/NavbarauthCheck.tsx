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
        if (!res.ok) throw new Error();

        await res.json();
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };

    verifyToken();
  }, []);
}
