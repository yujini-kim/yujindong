"use client";
import ResultHeader from "@/components/result/ResultHeader";
import { useResultQuery } from "@/hooks/useResultQuery";
import { useSummaryStore, useTextStore } from "@/store/splitStore";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Result() {
  const [selectedTab, setSelectedTab] = useState<"summary" | "chat">("summary");
  const { uuid } = useParams();
  const { data } = useResultQuery(uuid);
  const { setTextLines, textLines } = useTextStore();
  const { setSummary, realsummary } = useSummaryStore();

  useEffect(() => {
    if (data?.summary) {
      setSummary(data.summary);
      setTextLines(data.text);
    }
  }, [data?.summary, data?.text, setSummary, setTextLines]);

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "축의금 추천 결과",
          text: "나의 축의금 추천 결과를 확인해보세요!",
          url: `${window.location.origin}/result/${uuid}`,
        });
      } catch (error) {
        console.error("공유 실패", error);
      }
    } else {
      alert("브라우저가 공유 기능을 지원하지 않아요.");
    }
  };

  return (
    <>
      <div className="mt-4 lg:mt-10 flex justify-center items-center">
        <div className="flex flex-col bg-[#E3DBCE] w-[350px] h-[580px] border-2 justify-center items-center gap-8 lg:w-[520px] lg:h-[720px]">
          {data && (
            <ResultHeader
              friend_name={data?.friendName}
              recommendation={data?.recommendation}
              score={data?.score}
            />
          )}

          <div className="bg-white border p-4 w-[280px] lg:w-100 lg:h-100">
            <div className="flex justify-center items-center mt-4 mb-4 gap-24 lg:gap-28">
              <span
                onClick={() => setSelectedTab("summary")}
                className={`text-sm lg:text-base ${
                  selectedTab === "summary" && "border-b-2 border-[#FAC656]"
                } cursor-pointer`}
              >
                3줄요약
              </span>
              <span
                onClick={() => setSelectedTab("chat")}
                className={`text-sm lg:text-base ${
                  selectedTab === "chat" && "border-b-2 border-[#FAC656]"
                } cursor-pointer`}
              >
                대화내용
              </span>
            </div>

            <div className="flex justify-center w-full h-[200px] p-4 lg:h-[300px]">
              {selectedTab === "summary" && realsummary.length > 0 && (
                <div className="p-4 flex flex-col justify-center text-sm lg:text-base">
                  {realsummary.map((line, idx) => (
                    <p key={idx}>- {line}</p>
                  ))}
                </div>
              )}

              {selectedTab === "chat" && (
                <div className="p-4 flex flex-col justify-center overflow-y-auto text-sm lg:text-base">
                  {textLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-[280px] flex justify-between lg:w-100 lg:gap-10">
            <Link
              href={"/analyze"}
              className="w-[45%] bg-[#FAC656] p-4 border cursor-pointer text-sm text-center lg:text-base"
            >
              다시하기
            </Link>
            <button
              onClick={handleWebShare}
              className="w-[45%] bg-[#242020] text-white text-sm p-4 border cursor-pointer lg:text-base"
            >
              공유하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
