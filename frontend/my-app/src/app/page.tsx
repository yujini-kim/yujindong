"use client";

import PreResult from "@/components/PreResult";
import Result from "@/components/Result";
import TextArea from "@/components/Textarea";
import { useAnalyzeMutation } from "@/hooks/analyzeText";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export default function Home() {
  const [text, setText] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [recommendation, setRecommendation] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const mutation = useAnalyzeMutation((data) => {
    setScore(data.score);
    setRecommendation(data.recommendation);
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(text);
  };

  return (
    <Wrapper>
      <TextArea onSubmit={onSubmit} value={text} onChange={onChange} />

      {score !== null ? (
        <Result recommendation={recommendation} score={score} />
      ) : (
        <PreResult />
      )}
    </Wrapper>
  );
}
