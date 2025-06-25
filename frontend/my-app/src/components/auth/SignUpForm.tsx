"use client";

import { SignupValues, useSignUpMutation } from "@/hooks/useAuthMutation";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const { register, handleSubmit } = useForm<SignupValues>();
  const signUpinMutation = useSignUpMutation();
  const onSubmit = (data: SignupValues) => {
    signUpinMutation.mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[294px] gap-2 mt-6"
    >
      <input
        {...register("displayName", { required: true })}
        className="p-2 border-b border-black focus:outline-none"
        placeholder="Your name"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        className="p-2 border-b border-black focus:outline-none"
        placeholder="Email"
      />
      <input
        {...register("username", { required: true })}
        className="p-2 border-b border-black focus:outline-none"
        placeholder="ID"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        className="p-2 border-b border-black focus:outline-none"
        placeholder="Password"
      />
      <button className="w-full p-3 mt-8 bg-[#FAC656] cursor-pointer">
        회원가입
      </button>
    </form>
  );
}
