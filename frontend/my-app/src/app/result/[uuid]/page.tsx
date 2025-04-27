"use client";

import ResultCircle from "@/components/ui/Result/ResultCircle";
import { AnalyzeResponse } from "@/hooks/analyzeText";
import { ShareURL } from "@/hooks/ShareURL";
import { useSummaryStore, useTextStore } from "@/store/splitStore";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface IShareResult {
  score: number;
  recommendation: string;
  summary: string;
  friendName: string;
  createdAt: string;
  text: string;
}

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
  max-width: 294px;
  width: 294px;
  gap: 20px;
`;

const RealSummary = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
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

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const ChatText = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  padding: 10px;
  font-size: 12px;
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

const Tabs = styled.div`
  width: 100%;
  border: 2px solid ${(props) => props.theme.shadowColor};
  border-radius: 10px;
`;

const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.span<{ $isActive: boolean }>`
  font-size: 14px;
  border-bottom: ${(props) =>
    props.$isActive ? `2px solid ${props.theme.circleColor}` : "none"};
  cursor: pointer;
`;

export default function ShareResultPage() {
  const params = useParams();
  const uuid = params?.uuid as string;
  const [selectedTab, setSelectedTab] = useState<"summary" | "chat">("summary");
  const { setTextLines, textLines } = useTextStore();
  const { data } = useQuery<IShareResult>({
    queryKey: ["shareData", uuid],
    queryFn: () => ShareURL(uuid as string),
    enabled: !!uuid,
  });
  const { setSummary, realsummary } = useSummaryStore();

  useEffect(() => {
    if (data?.summary) {
      setSummary(data.summary);
      setTextLines(data.text);
    }
  }, [data?.summary, data?.text, setSummary, setTextLines]);

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "축의금 추천 결과",
          text: "나의 축의금 추천 결과를 확인해보세요!",
          url: `${window.location.origin}/result/${uuid}`,
        });
      } catch (error) {
        console.error("공유 실패", error);
      }
    } else {
      alert("브라우저가 공유 기능을 지원하지 않아요.");
    }
  };

  console.log(data);

  return (
    <div>
      <DetailDesignCard>
        <DetailCard>
          <Analyze>
            <TextInfo>
              <span>
                상대방: {data?.friendName}
                <br />
                추천축의금 : {data?.recommendation}
              </span>
            </TextInfo>
            {data && <ResultCircle score={data.score} />}
          </Analyze>
          <Tabs>
            <Tab>
              <Title
                $isActive={selectedTab === "summary"}
                onClick={() => setSelectedTab("summary")}
              >
                3줄요약
              </Title>
              <Title
                $isActive={selectedTab === "chat"}
                onClick={() => setSelectedTab("chat")}
              >
                대화내용
              </Title>
            </Tab>
            {selectedTab === "summary" && realsummary.length > 0 && (
              <RealSummary>
                {realsummary.map((line, idx) => (
                  <p key={idx}>- {line}</p>
                ))}
              </RealSummary>
            )}

            {selectedTab === "chat" && (
              <ChatText>
                {textLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </ChatText>
            )}
          </Tabs>
        </DetailCard>
        <CloseDetailBtn onClick={handleWebShare}>공유하기</CloseDetailBtn>
      </DetailDesignCard>
    </div>
  );
}
