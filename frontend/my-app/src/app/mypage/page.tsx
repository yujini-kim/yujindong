"use client";

import DetailView from "@/components/ui/mypage/DetailView";
import MyList from "@/components/ui/mypage/MyList";
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

function Mypage() {
  useAuthGuard();
  const { data, isLoading } = useMyPageQuery();
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
          idx={selectedIdx}
          recommendation={data.items[selectedIdx].recommendation}
          score={data.items[selectedIdx].score}
          text={data.items[selectedIdx].text}
          summary={data.items[selectedIdx].summary}
          onClose={() => setIsClick((prev) => !prev)}
        />
      )}
    </Wrapper>
  );
}

export default Mypage;
