"use client";
import ResultCircle from "@/components/result/ResultCircle";

export default function Result() {
  return (
    <>
      <div className="h-dvh flex justify-center items-center">
        <div className="flex flex-col bg-[#E3DBCE] w-[520px] h-[720px] border-2 justify-center items-center gap-8">
          <div className="flex items-center gap-20">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="w-24 bg-[#242020] text-white text-center p-2">
                  상대방
                </div>
                <div className="w-24 text-center p-2 border-b-2">동동이이</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 bg-[#242020] text-white text-center p-2">
                  추천축의금
                </div>
                <div className="w-24 text-center p-2 border-b-2">7만원</div>
              </div>
            </div>
            <ResultCircle score={70} />
          </div>
          <div className="bg-white w-100 h-100 border p-4">
            <div className="flex justify-center gap-20">
              <span>3줄요약</span>
              <span>대화내용</span>
            </div>
          </div>
          <div className="w-100 flex gap-10">
            <button className="w-[45%] bg-[#FAC656] p-4 border">
              다시하기
            </button>
            <button className="w-[45%] bg-[#242020] text-white p-4 border">
              공유하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
