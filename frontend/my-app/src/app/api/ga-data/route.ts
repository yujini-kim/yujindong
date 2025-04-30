// src/app/api/ga-data/route.ts
import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// ❗ 여기가 핵심!! 이 줄이 꼭 있어야 해!
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});
console.log("📌 GA_PRIVATE_KEY ===>", process.env.GA_PRIVATE_KEY?.slice(0, 50));

export async function GET() {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      metrics: [{ name: "activeUsers" }, { name: "eventCount" }],
      dimensions: [{ name: "eventName" }],
    });

    const rows = response.rows || [];

    const analyzeClickRow = rows.find(
      (row) => row.dimensionValues?.[0]?.value === "analyze_button_click"
    );

    const activeUsers = (response.totals?.[0] as any)?.values?.[0] || "0";
    const analyzeClick = analyzeClickRow?.metricValues?.[0]?.value || "0";

    return NextResponse.json({
      visits: Number(activeUsers),
      analyzeButtonClick: Number(analyzeClick),
    });
  } catch (error: any) {
    console.error("🔥 GA API error:", error); // 여기서 진짜 에러 출력
    return NextResponse.json(
      { error: "Failed to fetch GA data" },
      { status: 500 }
    );
  }
}
