interface ResultDetailModalProps {
  selectedTab: "summary" | "chat";
  setSelectedTab: (tab: "summary" | "chat") => void;
  summary: string[];
  text: string[];
}

export default function Content({
  selectedTab,
  setSelectedTab,
  summary,
  text,
}: ResultDetailModalProps) {
  return (
    <>
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
      <div className="flex justify-center w-full h-[216px]">
        {selectedTab === "summary" && summary.length > 0 && (
          <div className="p-4 flex flex-col justify-center">
            {summary.map((line, idx) => (
              <p key={idx}>- {line}</p>
            ))}
          </div>
        )}

        {selectedTab === "chat" && (
          <div className="p-4 overflow-y-auto">
            {text.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
