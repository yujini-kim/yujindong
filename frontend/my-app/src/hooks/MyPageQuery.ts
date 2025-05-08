import { useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export interface IMypageProps {
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

export const fetchMyPage = async (currentPage: number) => {
  const res = await fetch(`${BASE_URL}/mypage?page=${currentPage}`, {
    credentials: "include",
  });
  const data = res.json();
  return data;
};

export function useMyPageQuery(currentPage: number) {
  return useQuery<IMypageProps>({
    queryKey: ["mypage", currentPage],
    queryFn: () => fetchMyPage(currentPage),
  });
}
