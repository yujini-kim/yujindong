"use client";

import LogInForm from "@/components/LogInForm";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/helloberger.svg"
        width={192}
        height={192}
        alt="logo"
        className="m-8"
      />
      <LogInForm />
      <div className="flex gap-1 text-sm mt-6">
        <span>회원이 아니신가요?</span>
        <Link href="/signup" className="text-[#FAC656] underline">
          회원가입 하기
        </Link>
      </div>
      <div className="mt-12 flex items-center text-center text-[#333] text-sm font-medium w-full max-w-[294px] my-4">
        <div className="flex-1 border-b border-[#aaa] mr-2" />
        <span className="text-xs">소셜로그인</span>
        <div className="flex-1 border-b border-[#aaa] ml-2" />
      </div>
      <div className="flex gap-12">
        <div className="border border-[#C0C0C0] rounded-4xl size-13 flex items-center justify-center cursor-pointer">
          <img src="/kakao.png" className="size-[27px]" />
        </div>
        <div className="border border-[#C0C0C0] rounded-4xl size-13 flex items-center justify-center cursor-pointer">
          <img src="/google.png" className="size-[27px]" />
        </div>
      </div>
    </div>
  );
}
