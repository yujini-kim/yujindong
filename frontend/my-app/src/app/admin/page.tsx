"use client";

import { useState } from "react";
import { useAdminMembersQuery } from "@/hooks/AdminQuery";
import { useMyPageStore } from "@/store/MypageStore";
import AdminPagination from "@/components/admin/AdminPagenation";
import DeleteBtn from "@/components/admin/DeleteBtn";
import AdminTable from "@/components/admin/AdminTable";

export default function Admin() {
  const { data } = useAdminMembersQuery();
  const [username, setUsername] = useState("");
  const { currentPage } = useMyPageStore();
  type SearchField =
    | "id"
    | "display_name"
    | "username"
    | "email"
    | "analyzeCount";

  const [searchField, setSearchField] = useState<SearchField>("display_name"); // 기본값: 이름
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const totalPages = data ? Math.ceil(data.length / 10) : 0;

  const currentItems = data?.slice((currentPage - 1) * 10, currentPage * 10);
  const filteredItems = currentItems?.filter((item) => {
    const value = String(item[searchField]).toLowerCase();
    return value.includes(searchKeyword.toLowerCase());
  });

  return (
    <div className="p-4">
      <div className="flex gap-2 items-center mb-4">
        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value as SearchField)}
          className="border px-2 py-1 rounded"
        >
          <option value="id">ID</option>
          <option value="display_name">이름</option>
          <option value="username">사용자ID</option>
          <option value="email">Email</option>
          <option value="analyzeCount">분석 횟수</option>
        </select>

        <input
          type="text"
          placeholder="검색어 입력"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="border px-2 py-1 rounded w-full max-w-xs"
        />
      </div>

      <AdminTable items={filteredItems ?? []} />
      <AdminPagination totalPages={totalPages} />
      <DeleteBtn username={username} onChange={onChange} />
    </div>
  );
}
