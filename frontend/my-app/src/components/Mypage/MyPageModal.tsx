import Content from "@/components/Mypage/Content";
import { useMyPageStore } from "@/store/MypageStore";
import { useTextStore, useSummaryStore } from "@/store/splitStore";

interface Props {
  data: any;
}

export default function MyPageModal({ data }: Props) {
  const { selectedTab, setSelectedIdx, setSelectedTab } = useMyPageStore();
  const { textLines } = useTextStore();
  const { realsummary } = useSummaryStore();

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-40">
      <div className="bg-white w-[350px] md:w-[400px] h-[400px] border-2 p-4 space-y-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <Content
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          summary={realsummary}
          text={textLines}
        />
        <button
          onClick={() => setSelectedIdx(null)}
          className="bg-[#242020] text-white cursor-pointer w-full p-2"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
