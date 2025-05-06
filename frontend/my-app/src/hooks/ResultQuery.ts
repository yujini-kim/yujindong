import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./AnalyzeMutation";

interface IShareResult {
  score: number;
  recommendation: string;
  summary: string;
  friendName: string;
  createdAt: string;
  text: string;
}
export function useResultQuery(uuid: string | string[] | undefined) {
  return useQuery<IShareResult>({
    queryKey: ["result", uuid],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/result/${uuid}`);
      if (!res.ok) {
        throw new Error("결과 불러오기 실패");
      }
      return await res.json();
    },
    enabled: !!uuid,
  });
}
