import { useResultTabStore } from "@/store/resultStore";

interface Props {
  summary: string[];
  chat: string[];
}

export default function ResultContent({ summary, chat }: Props) {
  const { selectedTab } = useResultTabStore();

  return (
    <div className="flex justify-center w-[360px] h-[216px]">
      {selectedTab === "summary" && summary.length > 0 && (
        <div className="p-4 flex flex-col justify-center">
          {summary.map((line, idx) => (
            <p key={idx}>- {line}</p>
          ))}
        </div>
      )}
      {selectedTab === "chat" && (
        <div className="p-4 overflow-y-auto">
          {chat.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}
