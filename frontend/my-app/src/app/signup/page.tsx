import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/hooks/AnalyzeMutation";
export default function Signup() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/helloberger.svg"
        width={192}
        height={192}
        alt="logo"
        className="m-8"
      />
      <SignUpForm />
      <div className="flex gap-1 text-sm mt-6">
        <span>이미 회원이신가요?</span>
        <Link href="/login" className="text-[#005246] underline">
          로그인하기
        </Link>
      </div>
      <div className="mt-12 flex items-center text-center text-[#333] text-sm font-medium w-full max-w-[294px] my-4">
        <div className="flex-1 border-b border-[#aaa] mr-2" />
        <span className="text-xs">소셜회원가입</span>
        <div className="flex-1 border-b border-[#aaa] ml-2" />
      </div>
      <div className="flex gap-12">
        <a
          href={`${BASE_URL}/oauth2/authorization/kakao`}
          className="border border-[#C0C0C0] rounded-4xl size-13 flex items-center justify-center cursor-pointer"
        >
          <img src="/kakao.png" className="size-[27px]" />
        </a>
        <a
          href={`${BASE_URL}/oauth2/authorization/google`}
          className="border border-[#C0C0C0] rounded-4xl size-13 flex items-center justify-center cursor-pointer"
        >
          <img src="/google.png" className="size-[27px]" />
        </a>
      </div>
    </div>
  );
}
