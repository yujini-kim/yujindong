"use client";
import ResultCircle from "@/components/result/ResultCircle";
import { useResultQuery } from "@/hooks/ResultQuery";
import { useSummaryStore, useTextStore } from "@/store/splitStore";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Result() {
  const [selectedTab, setSelectedTab] = useState<"summary" | "chat">("summary");
  const { uuid } = useParams();
  const { data, isLoading, isError } = useResultQuery(uuid);
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
      <div className="mt-12 flex justify-center items-center">
        <div className="flex flex-col bg-[#E3DBCE] w-[520px] h-[720px] border-2 justify-center items-center gap-8">
          <div className="flex items-center gap-20">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="w-24 bg-[#242020] text-white text-center p-2">
                  상대방
                </div>
                <div className="w-24 text-center p-2 border-b-2">
                  {data?.friendName}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 bg-[#242020] text-white text-center p-2">
                  추천축의금
                </div>
                <div className="w-24 text-center p-2 border-b-2">
                  {data?.recommendation}
                </div>
              </div>
            </div>
            <ResultCircle score={data?.score as number} />
          </div>
          <div className="bg-white w-100 h-100 border p-4">
            <div className="flex justify-center items-center gap-28 mt-4">
              <span
                onClick={() => setSelectedTab("summary")}
                className={`${
                  selectedTab === "summary" && "border-b-2 border-[#FAC656]"
                } cursor-pointer`}
              >
                3줄요약
              </span>
              <span
                onClick={() => setSelectedTab("chat")}
                className={`${
                  selectedTab === "chat" && "border-b-2 border-[#FAC656]"
                } cursor-pointer`}
              >
                대화내용
              </span>
            </div>

            <div className="flex justify-center w-[360px] h-[216px]">
              {selectedTab === "summary" && realsummary.length > 0 && (
                <div className="p-4 flex flex-col justify-center">
                  {realsummary.map((line, idx) => (
                    <p key={idx}>- {line}</p>
                  ))}
                </div>
              )}

              {selectedTab === "chat" && (
                <div className="p-4 overflow-y-auto">
                  {textLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-100 flex gap-10">
            <Link
              href={"/analyze"}
              className="w-[45%] bg-[#FAC656] p-4 border cursor-pointer text-center"
            >
              다시하기
            </Link>
            <button
              onClick={handleWebShare}
              className="w-[45%] bg-[#242020] text-white p-4 border cursor-pointer"
            >
              공유하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
