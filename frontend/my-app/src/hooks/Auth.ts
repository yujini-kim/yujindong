import { SigninValues, SignupValues } from "@/components/ui/auth/type";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;
export function useSignUpMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (formData: SignupValues) => {
      const res = await fetch(`${BASE_URL}/signup`, {
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
      router.push("/auth/signin");
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
  return useMutation({
    mutationFn: async (signinValues: SigninValues) => {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(signinValues),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("로그인 실패");
      }

      const data = await res.json();
      const token = data.token;

      localStorage.setItem("accessToken", token);

      return data;
    },
    onSuccess: (data) => {
      console.log("로그인 성공!", data.token);
      router.push("/mypage");
    },
    onError: (error) => {
      alert("❌ 로그인 실패: " + error.message);
    },
  });
}
