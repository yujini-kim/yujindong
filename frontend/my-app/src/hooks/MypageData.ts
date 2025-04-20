import { useQuery } from "@tanstack/react-query";

export interface IAnalysisItem {
  text?: string;
  score: number;
  recommendation: string;
  summary: string;
  createdAt: string;
  idx?: number;
}

interface MyPageResponse {
  items: IAnalysisItem[];
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export const fetchMyPage = async () => {
  const token = localStorage.getItem("accessToken");
  const res = await fetch(`${BASE_URL}/mypage`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("데이터를 불러오지 못했습니다.");
  return res.json();
};
export function useMyPageQuery() {
  return useQuery<MyPageResponse>({
    queryKey: ["mypage"],
    queryFn: fetchMyPage,
    staleTime: 1000 * 60 * 5,
  });
}
