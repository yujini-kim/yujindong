import Link from "next/link";

export default function ChangeSignUp() {
  return (
    <>
      <div className="flex gap-1 text-sm mt-6">
        <span>회원이 아니신가요?</span>
        <Link href="/terms/signup" className="text-[#005246] underline">
          회원가입 하기
        </Link>
      </div>
    </>
  );
}
