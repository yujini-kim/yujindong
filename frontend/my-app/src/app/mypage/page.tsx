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
        <div className="">
          <div className="fixed top-[30%]">
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
