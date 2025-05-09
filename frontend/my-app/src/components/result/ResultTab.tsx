import { useResultTabStore } from "@/store/resultStore";

export default function ResultTabs() {
  const { selectedTab, setSelectedTab } = useResultTabStore();

  return (
    <div className="flex justify-center items-center gap-28 mt-4">
      <span
        onClick={() => setSelectedTab("summary")}
        className={`cursor-pointer ${
          selectedTab === "summary" ? "border-b-2 border-[#FAC656]" : ""
        }`}
      >
        3줄요약
      </span>
      <span
        onClick={() => setSelectedTab("chat")}
        className={`cursor-pointer ${
          selectedTab === "chat" ? "border-b-2 border-[#FAC656]" : ""
        }`}
      >
        대화내용
      </span>
    </div>
  );
}
