"use client";

import { AnalyzeResponse, useAnalyzeMutation } from "@/hooks/analyzeText";
import { useState } from "react";
import styled from "styled-components";
import AnalyzeResult from "@/components/ui/analyzeForm/AnalyzeResult";
import AnalyzeForm from "@/components/ui/analyzeForm/AnalyzeForm";
import Summary from "@/components/ui/Result/Summary";
import { useSummaryStore } from "@/store/splitStore";
import { useQuery } from "@tanstack/react-query";
import { ShareURL } from "@/hooks/ShareURL";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 28px;
`;

export default function Analyze() {
  const [text, setText] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState<boolean>(true); //false일때message 쓰기기
  const [message, setMessage] = useState<string | null>("");
  const [recommendation, setRecommendation] = useState<string>("");
  const [shareUrl, setShareUrl] = useState<string>("");
  const { setSummary, realsummary } = useSummaryStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result as string;
      setText(content);
    };
    reader.readAsText(file);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const mutation = useAnalyzeMutation((data) => {
    setScore(data.score);
    setRecommendation(data.recommendation);
    setSuccess(data.success);
    setMessage(data.message);
    setSummary(data.summary);
    setShareUrl(data.shareUuid);
    console.log(data.shareUuid);
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ text, friend_name: name });
  };

  return (
    <Wrapper>
      <AnalyzeForm
        onSubmit={onSubmit}
        textValue={text}
        nameValue={name}
        onChange={onChange}
        handleFileChange={handleFileChange}
        handleName={handleName}
        isPending={mutation.isPending}
      />
      {success ? (
        realsummary.length === 0 ? null : (
          <Summary
            summary={realsummary.map((line, idx) => (
              <p key={idx}>- {line}</p>
            ))}
          />
        )
      ) : (
        <Summary summary={message} />
      )}
      <AnalyzeResult
        score={score}
        recommendation={recommendation}
        isPending={mutation.isPending}
        shareUrl={shareUrl}
      />
    </Wrapper>
  );
}
