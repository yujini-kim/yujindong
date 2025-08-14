"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Terms() {
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleNextClick = () => {
    setSubmitted(true);
    if (termsChecked && privacyChecked) {
      router.push("/signup");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <div className="bg-[#E3DBCE] border-2 w-full max-w-[600px] p-6 flex flex-col items-start">
        {/* 서비스 이용약관 */}
        <h1 className="w-full bg-[#EFBE53] border-2 p-2 text-xl lg:text-3xl font-bold mb-6 text-center">
          서비스 이용약관
        </h1>
        <p className="text-sm lg:text-base">
          본 약관은 사용자가 본 서비스를 이용함에 있어 회사와 사용자 간의 권리,
          의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
        <h2 className="text-xl font-semibold mt-4">1. 목적</h2>
        <p className="mb-4 text-sm lg:text-base">
          이 약관은 회사(이하 &quot;회사&quot;)가 제공하는 서비스의 이용과 관련하여 회사와
          이용자 간의 권리, 의무 및 책임사항을 규정합니다.
        </p>
        <h2 className="text-xl font-semibold mt-4">2. 회원의 의무</h2>
        <p className="mb-4 text-sm lg:text-base">
          회원은 다음 행위를 하여서는 안 됩니다: 타인의 정보 도용, 서비스 방해
          행위 등
        </p>
        <h2 className="text-xl font-semibold mt-4">3. 서비스 이용</h2>
        <p className="mb-4 text-sm lg:text-base">
          회사는 이용자에게 안정적인 서비스를 제공하기 위해 노력합니다. 단,
          부득이한 경우 서비스의 일부를 제한하거나 중단할 수 있습니다.
        </p>

        {/* 서비스 이용약관 체크박스 */}
        <label className="flex gap-2 items-center mt-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
          />
          동의합니다
        </label>
        {submitted && !termsChecked && (
          <p className="text-red-500 text-sm">
            서비스 이용약관에 동의해주세요.
          </p>
        )}

        {/* 개인정보처리방침 */}
        <h1 className="w-full bg-[#EFBE53] border-2 p-2 font-bold mt-12 mb-6 text-center text-xl lg:text-3xl">
          개인정보처리방침
        </h1>
        <p className="mb-4 text-sm lg:text-base">
          회사는 사용자의 개인정보를 중요시하며, 『개인정보 보호법』을
          준수합니다.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          1. 수집하는 개인정보 항목
        </h2>
        <p className="mb-4 text-sm lg:text-base">
          이름, 이메일, 서비스 이용기록 등
        </p>
        <h2 className="text-xl font-semibold mt-4">
          2. 개인정보의 수집 및 이용 목적
        </h2>
        <p className="mb-4 text-sm lg:text-base">
          회원 관리, 서비스 제공 및 개선, 고지사항 전달
        </p>
        <h2 className="text-xl font-semibold mt-4">3. 보유 및 이용기간</h2>
        <p className="mb-4 text-sm lg:text-base">
          이용 목적 달성 시까지 또는 법령에 따른 보관 기간까지
        </p>

        {/* 개인정보 체크박스 */}
        <label className="flex gap-2 items-center mt-2">
          <input
            className="cursor-pointer"
            type="checkbox"
            checked={privacyChecked}
            onChange={(e) => setPrivacyChecked(e.target.checked)}
          />
          동의합니다
        </label>
        {submitted && !privacyChecked && (
          <p className="text-red-500 text-sm">
            개인정보 처리방침에 동의해주세요.
          </p>
        )}

        <p className="text-sm text-gray-500 mt-6">시행일자: {today}</p>

        {/* 다음 버튼 */}
        <button
          onClick={handleNextClick}
          className={`w-[100px] p-2 mt-6 text-white rounded cursor-pointer ${
            termsChecked && privacyChecked ? "bg-[#241F22]" : "bg-gray-400"
          }`}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Terms;
