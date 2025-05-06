import { SigninValues, SignupValues } from "@/components/ui/auth/type";
import { useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;
console.log(BASE_URL);
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
      router.replace("/auth/signin");
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
  const setToken = useAuthStore.getState().setToken;

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

      return res;
    },
    onSuccess: (data) => {
      console.log("💬 로그인 성공", data);
      setToken("use-cookie");
      router.replace("/mypage");
    },
    onError: (error) => {
      alert("❌ 로그인 실패: " + error.message);
    },
  });
}

export function useLogout() {
  const router = useRouter();
  const resetToken = useAuthStore.getState().clearToken;

  const logout = async () => {
    try {
      await fetch(`${BASE_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("❌ 로그아웃 요청 실패", err);
    } finally {
      resetToken();
      router.replace("/auth/signin");
    }
  };

  return logout;
}
