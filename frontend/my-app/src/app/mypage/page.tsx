"use client";

import PageSession from "@/components/ui/mypage/PageSession";
import ResultCircle from "@/components/ui/Result/ResultCircle";
import { useMyPageQuery } from "@/hooks/MypageData";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useMypageStore } from "@/store/mypageStore";
import { useSummaryStore } from "@/store/summaryStore";
import Summary from "@/components/ui/Result/Summary";
import styled from "styled-components";
import { Overlay } from "@/components/ui/mypage/styled";

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

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${(props) => props.theme.shadowColor};
  border-radius: 7px;
  box-shadow: 5px 5px ${(props) => props.theme.shadowColor};
  padding: 20px;
  max-width: 294px;
  width: 294px;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Idx = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`;

const ChatText = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailDesignCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  background-color: ${(props) => props.theme.accentColor};
  border: 2px solid ${(props) => props.theme.shadowColor};
  border-radius: 7px;
  box-shadow: 7px 7px ${(props) => props.theme.shadowColor};
  padding-top: 20px;
  padding-bottom: 40px;
`;

const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  border-top: 2px solid ${(props) => props.theme.shadowColor};
  border-bottom: 2px solid ${(props) => props.theme.shadowColor};
  padding: 20px;
  max-width: 394px;
  width: 394px;
  gap: 20px;
`;

const RealSummary = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  padding: 10px;
  p {
    font-size: 12px;
  }
`;

const Analyze = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CloseDetailBtn = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  padding: 4px;
  border: 2px solid ${(props) => props.theme.shadowColor};
  border-radius: 7px;
  font-weight: 600;
  font-size: 12px;
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

function Mypage() {
  useAuthGuard();
  const {
    currentPage,
    setCurrentPage,
    selectedIdx,
    setSelectedIdx,
    isClick,
    toggleClick,
  } = useMypageStore();
  const { data, isLoading } = useMyPageQuery(currentPage);
  const { setSummary, realsummary } = useSummaryStore();

  return (
    <Wrapper>
      <List>
        {data?.items.map((data, idx) => (
          <Card
            key={idx}
            onClick={() => {
              setSelectedIdx(idx);
              toggleClick();
              setSummary(data.summary);
            }}
          >
            <TextInfo>
              <Idx>0{idx + 1}</Idx>
              <span>
                상대방: {data.friend_name ?? "익명의사나이"} <br />
                추천축의금 :{data.recommendation}
              </span>
            </TextInfo>
            <ResultCircle score={data.score} />
          </Card>
        ))}
      </List>

      {isClick && selectedIdx !== null && data?.items[selectedIdx] && (
        <Overlay
          onClick={() => {
            toggleClick();
          }}
        >
          <DetailDesignCard onClick={(e) => e.stopPropagation()}>
            <DetailCard>
              <Analyze>
                <TextInfo>
                  <Idx>
                    {selectedIdx}
                    {selectedIdx + 1}
                  </Idx>
                  <span>
                    상대방:{" "}
                    {data.items[selectedIdx].friend_name ?? "익명의사나이"}
                    <br />
                    추천축의금 :{data.items[selectedIdx].recommendation}
                  </span>
                </TextInfo>
                <ResultCircle score={data.items[selectedIdx].score} />
              </Analyze>
              {realsummary.length === 0 ? null : (
                <RealSummary>
                  {realsummary.map((line, idx) => (
                    <p key={idx}>- {line}</p>
                  ))}
                </RealSummary>
              )}
              <ChatText>{data.items[selectedIdx].text}</ChatText>
            </DetailCard>
            <CloseDetailBtn
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                toggleClick();
              }}
            >
              CLOSE
            </CloseDetailBtn>
          </DetailDesignCard>
        </Overlay>
      )}

      <PageSession totalPages={data?.totalPages ?? 1} />
    </Wrapper>
  );
}

export default Mypage;
