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

            <div className="flex justify-center mt-28">
              {selectedTab === "summary" && realsummary.length > 0 && (
                <div>
                  {realsummary.map((line, idx) => (
                    <p key={idx}>- {line}</p>
                  ))}
                </div>
              )}

              {selectedTab === "chat" && (
                <div className="p-4">
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
            <button className="w-[45%] bg-[#242020] text-white p-4 border cursor-pointer">
              공유하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
