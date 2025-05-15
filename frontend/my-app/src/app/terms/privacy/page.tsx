export default function Privacy() {
  return (
    <div className="flex flex-col justify-center items-center px-6">
      <div className="bg-[#E3DBCE] border-2 w-full max-w-[600px] p-6 flex flex-col items-start">
        {/* 개인정보처리방침 */}
        <h1 className="w-full bg-[#EFBE53] border-2 p-2 font-bold mt-6 mb-6 text-center text-xl lg:text-3xl">
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
      </div>
    </div>
  );
}
