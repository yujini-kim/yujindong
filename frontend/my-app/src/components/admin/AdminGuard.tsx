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
  const { isAdmin } = useAdminCheckStore();
  const router = useRouter();

  useEffect(() => {
    fetchUserRoles();
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      console.log(isAdmin);
      alert("접근 권한이 없습니다");
      router.replace("/");
    }
  }, [isAdmin, router]);

  return <>{children}</>;
}
