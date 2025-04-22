"use client";

import { LeftArrow, RightArrow } from "@/components/icons/Arrows";
import DetailView from "@/components/ui/mypage/DetailView";
import MyList from "@/components/ui/mypage/MyList";
import PageSession from "@/components/ui/mypage/PageSession";
import { useMyPageQuery } from "@/hooks/MypageData";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
  margin-bottom: 28px;
  position: relative;
`;

const PageBtn = styled.button`
  border: 2px solid #0a0a0a;
  border-radius: 7px;
  box-shadow: 3px 3px #0a0a0a;
`;

const PageTabs = styled.div`
  display: flex;

  gap: 15px;
`;

const PageNumber = styled.div`
  font-size: 18px;
`;

function Mypage() {
  useAuthGuard();
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading } = useMyPageQuery(currentPage);
  const [isClick, setIsClick] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleDetail = (idx: number) => {
    setIsClick((pre) => !pre);
    setSelectedIdx(idx);
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <Wrapper>
      {data?.items && <MyList data={data} onClick={handleDetail} />}
      {isClick && selectedIdx !== null && data && (
        <DetailView
          friend_name={data.items[selectedIdx].friend_name}
          idx={selectedIdx}
          recommendation={data.items[selectedIdx].recommendation}
          score={data.items[selectedIdx].score}
          text={data.items[selectedIdx].text}
          summary={data.items[selectedIdx].summary}
          onClose={() => setIsClick((prev) => !prev)}
        />
      )}
      <PageSession
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={data?.totalPages ?? 1}
      />
    </Wrapper>
  );
}

export default Mypage;
