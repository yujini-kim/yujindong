import { useQuery } from "@tanstack/react-query";

export interface IAnalysisItem {
  items: {
    createAt: string;
    friend_name: string;
    recommendation: string;
    score: number;
    summary: string;
    text: string;
    index: number;
  }[];
  pageSize: number;
  totalPages: number;
  currentPage?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export const fetchMyPage = async (currentPage: number) => {
  const res = await fetch(`${BASE_URL}/api/mypage?page=${currentPage}`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("데이터를 불러오지 못했습니다.");
  return res.json();
};

export function useMyPageQuery(currentPage: number) {
  return useQuery<IAnalysisItem>({
    queryKey: ["mypage", currentPage],
    queryFn: () => fetchMyPage(currentPage),
    staleTime: 1000 * 60 * 5,
  });
}
