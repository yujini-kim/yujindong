import Link from "next/link";

export default function ChangeLogin() {
  return (
    <>
      <div className="flex gap-1 text-sm mt-6">
        <span>이미 회원이신가요?</span>
        <Link href="/login" className="text-[#005246] underline">
          로그인하기
        </Link>
      </div>
    </>
  );
}
