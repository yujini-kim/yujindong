"use client";

import Loading from "@/components/ui/Loading";
import PreResult from "@/components/ui/PreResult";
import Result from "@/components/ui/Result";
import Summary from "@/components/ui/Summary";
import TextArea from "@/components/ui/Textarea";
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
  const [success, setSuccess] = useState<boolean>(true); //false일때message 쓰기기
  const [message, setMessage] = useState<string | null>("");
  const [summary, setSummary] = useState<string | null>("");
  const [recommendation, setRecommendation] = useState<string>("");
  const [txt, setTxt] = useState("");
  const [isFile, setIsFile] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result as string;
      setTxt(content);
      setIsFile(true);
    };
    reader.readAsText(file);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
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
    mutation.mutate(text);
  };

  return (
    <Wrapper>
      <TextArea
        onSubmit={onSubmit}
        value={text}
        onChange={onChange}
        text={mutation.isPending ? "분석중..." : "분석하기"}
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
