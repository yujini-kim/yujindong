import { useMutation, UseMutationResult } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

type AnalyzeResponse = {
  score: number;
  recommendation: string;
  success: boolean;
  message: string;
  summary: string;
};

const analyzeText = async (text: string): Promise<AnalyzeResponse> => {
  const res = await fetch(`${BASE_URL}/api/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("서버오류:", errorText);
    throw new Error("서버 오류");
  }

  return res.json();
};

export const useAnalyzeMutation = (
  onSuccessCallback: (data: AnalyzeResponse) => void
): UseMutationResult<AnalyzeResponse, Error, string> => {
  return useMutation({
    mutationFn: analyzeText,

    onSuccess: (data) => {
      console.log("분석 결과", data);
      onSuccessCallback(data);
    },
    onError: (err) => {
      console.error("요청 실패:", err);
    },
  });
};
