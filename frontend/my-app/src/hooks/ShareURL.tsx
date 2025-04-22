import { AnalyzeResponse, BASE_URL } from "./analyzeText";

export const ShareURL = async (uuid: string): Promise<AnalyzeResponse> => {
  const res = await fetch(`${BASE_URL}/api/result/${uuid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("서버오류:", errorText);
    throw new Error("서버 오류");
  }

  const data = await res.json();
  return data;
};
