import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./AnalyzeMutation";

export interface IAdminProps {
  id: number;
  display_name: string;
  username: string;
  email: string;
  analyzeCount: string;
}

const fetchAdminMembers = async () => {
  const res = await fetch(`${BASE_URL}/api/admin/members`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("서버 응답 오류");
  return res.json();
};

export const useAdminMembersQuery = () =>
  useQuery<IAdminProps[]>({
    queryKey: ["admin-members"],
    queryFn: fetchAdminMembers,
  });
