"use client";

import Loading from "@/components/ui/Result/Loading";
import PreResult from "@/components/ui/Result/PreResult";
import Summary from "@/components/ui/Summary";
import TextArea from "@/components/ui/TextArea";
import { useAnalyzeMutation } from "@/hooks/analyzeText";
import { useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Result = dynamic(() => import("@/components/ui/Result/Result"), {
  ssr: false,
});

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
  const [summary, setSummary] = useState<string | null>("");
  const [recommendation, setRecommendation] = useState<string>("");

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
  });

  const realsummary =
    summary !== null
      ? summary
          .split("\n")
          .filter((line) => line.startsWith("-"))
          .map((line) => line.slice(1).trim())
      : [];

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ text, friend_name: name });
  };

  return (
    <Wrapper>
      <TextArea
        onSubmit={onSubmit}
        textValue={text}
        onChange={onChange}
        text={mutation.isPending ? "분석중..." : "분석하기"}
        handleFileChange={handleFileChange}
        handleName={handleName}
        nameValue={name}
      />
      {mutation.isPending ? (
        <Loading />
      ) : score !== null ? (
        <Result recommendation={recommendation} score={score} />
      ) : (
        <PreResult />
      )}

      {success ? (
        summary == "" ? null : (
          <Summary
            summary={realsummary.map((line, idx) => (
              <p key={idx}>- {line}</p>
            ))}
          />
        )
      ) : (
        <Summary summary={message} />
      )}
    </Wrapper>
  );
}
