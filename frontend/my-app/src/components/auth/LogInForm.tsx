"use client";

import { useLogInMutation } from "@/hooks/useAuthMutation";
import { useForm } from "react-hook-form";

interface ILogInProps {
  username: string;
  password: string;
}

export default function LogInForm() {
  const { register, handleSubmit } = useForm<ILogInProps>();
  const loginMutation = useLogInMutation();

  const onSubmit = (data: ILogInProps) => {
    loginMutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[294px] gap-4 mt-6"
    >
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
        autoComplete="current-password"
      />
      <button
        type="submit"
        className="w-full p-3 mt-8 bg-[#FAC656] border border-[#242020] cursor-pointer"
      >
        로그인
      </button>
    </form>
  );
}
