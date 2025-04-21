import { useQuery } from "@tanstack/react-query";

export interface IAnalysisItem {
  items: {
    createAt: string;
    friend_name: string;
    recommendation: string;
    score: number;
    summary: string;
    text: string;
  }[];
  pageSize?: number;
  totalPages?: number;
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
  return useQuery<IAnalysisItem>({
    queryKey: ["mypage"],
    queryFn: fetchMyPage,
    staleTime: 1000 * 60 * 5,
  });
}
