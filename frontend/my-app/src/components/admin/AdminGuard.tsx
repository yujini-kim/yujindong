"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminCheckStore } from "@/store/AuthCheckStore";
import { fetchUserRoles } from "@/hooks/AuthCheck";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { roles } = useAdminCheckStore();
  const router = useRouter();

  useEffect(() => {
    fetchUserRoles();
  }, []);

  useEffect(() => {
    if (!roles.includes("ROLE_ADMIN")) {
      console.log(roles);
      // alert("접근 권한이 없습니다");
      // router.replace("/");
    }
  }, [roles, router]);

  return <>{children}</>;
}
