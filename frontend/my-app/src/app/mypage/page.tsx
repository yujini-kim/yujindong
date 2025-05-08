"use client";

import ResultHeader from "@/components/result/ResultHeader";
import { useMyPageQuery } from "@/hooks/MyPageQuery";
import { useSummaryStore, useTextStore } from "@/store/splitStore";
import { useState } from "react";

export default function Mypage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useMyPageQuery(currentPage);
  const [selectedTab, setSelectedTab] = useState<"summary" | "chat">("summary");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const { setTextLines, textLines } = useTextStore();
  const { setSummary, realsummary } = useSummaryStore();

  return (
    <div className="h-dvh flex flex-col justify-center items-center gap-4 ">
      {data?.items.map((data, idx) => (
        <div
          key={idx}
          onClick={() => {
            setSelectedIdx(idx);
            setTextLines(data.text);
            setSummary(data.summary);
          }}
          className="w-[500px] bg-[#E3DBCE] border-2 border-[#242020] p-4 cursor-pointer"
        >
          <ResultHeader
            friend_name={data.friend_name}
            recommendation={data.recommendation}
            score={data.score}
          />
        </div>
      ))}

      {selectedIdx !== null && (
   
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-40">
            <div className="bg-white w-[400px] h-[400px] border-2 p-4 space-y-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
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
              <button onClick={()=>setSelectedIdx(null)} className="bg-[#242020] text-white cursor-pointer w-full p-2">닫기</button>
            </div>
         
          </div>

   
      )}

      <div className="flex gap-2 mt-4">
        <button
          className="w-6 h-6 bg-[#E3DBCE] border-2 cursor-pointer"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ◄
        </button>
        <p>{currentPage}</p>
        <button
          className="w-6 h-6 bg-[#E3DBCE] border-2 cursor-pointer"
          onClick={() =>
            setCurrentPage((prev) =>
              data && prev < data.totalPages ? prev + 1 : prev
            )
          }
          disabled={data && currentPage >= data.totalPages}
        >
          ►
        </button>
      </div>
    </div>
  );
}
