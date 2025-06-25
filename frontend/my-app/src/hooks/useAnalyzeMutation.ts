import { useMutation } from "@tanstack/react-query";

interface IAnalyzeProps {
  text: string;
  friend_name: string;
}

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export function useAnalyzeMutation() {
  return useMutation({
    mutationFn: async ({ text, friend_name }: IAnalyzeProps) => {
      const res = await fetch(`${BASE_URL}/api/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, friend_name }),
        credentials: "include",
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "분석 실패");
      }

      const data = await res.json();
      return data;
    },
  });
}
