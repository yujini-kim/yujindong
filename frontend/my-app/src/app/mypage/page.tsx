"use client";

import MyPageList from "@/components/Mypage/MyPageList";
import MyPageModal from "@/components/Mypage/MyPageModal";
import Pagination from "@/components/Mypage/Pagenation";
import { useAuthCheck } from "@/hooks/AuthCheck";
import { useMyPageQuery } from "@/hooks/MyPageQuery";
import { useMyPageStore } from "@/store/MypageStore";
import { useTextStore, useSummaryStore } from "@/store/splitStore";

export default function Mypage() {
  useAuthCheck();

  const { currentPage, selectedIdx } = useMyPageStore();
  const { setTextLines } = useTextStore();
  const { setSummary } = useSummaryStore();
  const { data } = useMyPageQuery(currentPage);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <MyPageList
        data={data}
        onItemClick={(item, idx) => {
          setTextLines(item.text);
          setSummary(item.summary);
          useMyPageStore.getState().setSelectedIdx(idx);
        }}
      />
      {selectedIdx !== null && data?.items && <MyPageModal data={data} />}
      {data && <Pagination totalPages={data?.totalPages ?? 1} />}
    </div>
  );
}
