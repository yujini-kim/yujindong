export default function Service() {
  return (
    <div className="flex flex-col justify-center items-center px-6">
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
      </div>
    </div>
  );
}
