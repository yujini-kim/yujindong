import Link from "next/link";

export default function TermsLink() {
  return (
    <div className="flex gap-8 justify-center text-xs text-gray-500 ">
      <Link
        href="/terms/service"
        className="border-b border-gray-500 hover:text-black hover:border-black transition"
      >
        이용약관
      </Link>
      <Link
        href="/terms/privacy"
        className="border-b border-gray-500 hover:text-black hover:border-black transition"
      >
        개인정보처리방침
      </Link>
    </div>
  );
}
