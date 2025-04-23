import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export type AnalyzeResponse = {
  score: number;
  recommendation: string;
  success: boolean;
  message: string;
  summary: string;
  shareUuid: string;
};

interface AnalyzePayload {
  text: string;
  friend_name: string;
}

const analyzeText = async ({
  text,
  friend_name,
}: AnalyzePayload): Promise<AnalyzeResponse> => {
  const token = localStorage.getItem("accessToken");
  const res = await fetch(`${BASE_URL}/api/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text, friend_name }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("서버오류:", errorText);
    throw new Error("서버 오류");
  }
  const data = await res.json();

  return data;
};

export const useAnalyzeMutation = (
  onSuccessCallback: (data: AnalyzeResponse) => void
): UseMutationResult<AnalyzeResponse, Error, AnalyzePayload> => {
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
