"use client";

import { useAuthCheck } from "@/hooks/AuthCheck";
export default function Admin() {
  useAuthCheck();
  return <>관리자페이지</>;
}
