"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [recommendation, setRecommendation] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      text: text,
    };

    try {
      const res = await fetch("http://localhost:8080/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("서버 응답:", result);
        setScore(result.score);
        setRecommendation(result.recommendation);
      } else {
        console.error("서버 오류:", res.status);
      }
    } catch (err) {
      console.error("요청 실패:", err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <form onSubmit={onSubmit}>
        <textarea
          onChange={onChange}
          value={text}
          placeholder="축의금 기준이 될 대화 내용을 입력하세요"
          rows={5}
          maxLength={1000}
          style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}
        >
          전송하기
        </button>
      </form>

      {/* 분석 결과 보여주기 */}
      {score !== null && (
        <div style={{ marginTop: "2rem", fontSize: "1.1rem" }}>
          <p>📊 친밀도 점수: <strong>{score}</strong></p>
          <p>💰 추천 축의금: <strong>{recommendation}</strong></p>
        </div>
      )}
    </div>
  );
}