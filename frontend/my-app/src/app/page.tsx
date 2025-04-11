"use client";

import TextArea from "@/components/Textarea";
import { useAnalyzeMutation } from "@/hooks/analyzeText";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [recommendation, setRecommendation] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
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
    <div style={{ padding: "2rem" }}>
      <form onSubmit={onSubmit}>
        <TextArea />
      </form>

      {score !== null && (
        <div style={{ marginTop: "2rem", fontSize: "1.1rem" }}>
          <p>
            📊 친밀도 점수: <strong>{score}</strong>
          </p>
          <p>
            💰 추천 축의금: <strong>{recommendation}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
