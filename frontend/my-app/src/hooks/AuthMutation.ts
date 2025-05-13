"use client";

import { useAuthStore } from "@/store/AuthCheckStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export interface SignupValues {
  username: string;
  email: string;
  displayName: string;
  password: string;
}

interface SigninValues {
  username: string;
  password: string;
}

export function useSignUpMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (formData: SignupValues) => {
      const res = await fetch(`${BASE_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "회원가입 실패");
      }

      return data;
    },

    onSuccess: () => {
      router.replace("/login");
      alert("회원가입 성공❤️ 환영해용 ^^");
    },

    onError: (err) => {
      alert("❌ 회원가입 실패: " + err.message);
      console.error(err);
    },
  });
}
export function useLogInMutation() {
  const router = useRouter();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  return useMutation({
    mutationFn: async (signinValues: SigninValues) => {
      const res = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify(signinValues),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("로그인 실패");
      }
      setIsLoggedIn(true);
      return res.json();
    },
    onSuccess: (data) => {
      console.log("💬 로그인 성공", data);
      router.replace("/");
    },
    onError: (error) => {
      alert("❌ 로그인 실패: " + error.message);
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  const router = useRouter();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const logout = async () => {
    try {
      await fetch(`${BASE_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });
      setIsLoggedIn(false);
      queryClient.removeQueries({ queryKey: ["mypage"] });
    } catch (err) {
      console.error("❌ 로그아웃 요청 실패", err);
    } finally {
      router.replace("/login");
    }
  };

  return logout;
}
