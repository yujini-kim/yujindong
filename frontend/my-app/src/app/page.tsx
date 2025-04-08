"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      message: text,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("서버 응답:", result);
      } else {
        console.error("서버 오류:", res.status);
      }
    } catch (err) {
      console.error("요청 실패:", err);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          onChange={onChange}
          value={text}
          placeholder="텍스트를 입력해 주세요"
          rows={5}
          maxLength={1000}
        />
        <button>전송하기</button>
      </form>
    </div>
  );
}
