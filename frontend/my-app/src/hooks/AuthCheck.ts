import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminCheckStore, useAuthStore } from "@/store/AuthCheckStore";

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
        setIsLoggedIn(false);
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

  if (res.ok) {
    const data = await res.json();
    useAdminCheckStore.getState().setRoles(data.roles);
  }
};
