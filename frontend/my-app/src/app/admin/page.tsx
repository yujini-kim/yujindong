"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export default function AnalyticsDashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [pageViews, setPageViews] = useState<number | null>(null);
  const [analyzeClicks, setAnalyzeClicks] = useState<number | null>(null);

  const propertyId = "487654659"; // GA4 Property ID 입력 (예: 398123456)

  const login = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      setToken(access_token);

      // page_view
      const res1 = await fetch(
        `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dimensions: [{ name: "eventName" }],
            metrics: [{ name: "eventCount" }],
            dimensionFilter: {
              filter: {
                fieldName: "eventName",
                stringFilter: {
                  value: "page_view",
                  matchType: "EXACT",
                },
              },
            },
          }),
        }
      );

      const res2 = await fetch(
        `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dimensions: [{ name: "eventName" }],
            metrics: [{ name: "eventCount" }],
            dimensionFilter: {
              filter: {
                fieldName: "eventName",
                stringFilter: {
                  value: "click_analyze_button",
                  matchType: "EXACT",
                },
              },
            },
          }),
        }
      );

      const data1 = await res1.json();
      const data2 = await res2.json();

      const views = data1?.rows?.[0]?.metricValues?.[0]?.value;
      const clicks = data2?.rows?.[0]?.metricValues?.[0]?.value;

      setPageViews(Number(views));
      setAnalyzeClicks(Number(clicks));
    },
    scope: "https://www.googleapis.com/auth/analytics.readonly",
  });

  return (
    <div style={{ padding: "20px" }}>
      {!token ? (
        <button onClick={() => login()}>Google 로그인 후 GA 데이터 보기</button>
      ) : (
        <>
          <p>📄 페이지 방문 수: {pageViews ?? "로딩 중..."}</p>
          <p>🧠 분석하기 버튼 클릭 수: {analyzeClicks ?? "로딩 중..."}</p>
        </>
      )}
    </div>
  );
}
