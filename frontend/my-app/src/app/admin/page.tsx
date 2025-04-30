"use client";
import { useEffect, useState } from "react";

export default function GAStats() {
  const [data, setData] = useState<{ visits: number; clicks: number }>({
    visits: 0,
    clicks: 0,
  });

  useEffect(() => {
    fetch("/api/ga-data")
      .then((res) => res.json())
      .then((res) => {
        setData({ visits: res.visits, clicks: res.analyzeButtonClick });
      });
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-md text-sm space-y-2">
      <p>📈 최근 7일 방문 수: {data.visits}명</p>
      <p>🖱️ 분석하기 버튼 클릭 수: {data.clicks}회</p>
    </div>
  );
}
