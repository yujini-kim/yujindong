"use client";

import {
  IAdminProps,
  useAdminMembersQuery,
} from "@/hooks/useAdminMembersQuery";
import { BASE_URL } from "@/hooks/useAnalyzeMutation";
import { useAdminStore } from "@/store/AdminStore";
import { useState } from "react";
import Loading from "../result/Loading";
import AdminPagination from "./AdminPagenation";
import AdminTable from "./AdminTable";
import DeleteBtn from "./DeleteBtn";
import SearchBar, { SearchField } from "./SearchBar";

export default function AdminContent() {
  const { data, isLoading, refetch } = useAdminMembersQuery();
  const [username, setUsername] = useState("");
  const { currentPage } = useAdminStore();

  const [searchField, setSearchField] = useState<SearchField>("display_name");
  const [searchKeyword, setSearchKeyword] = useState("");

  const isSearching = searchKeyword.trim() !== "";

  const handleDeleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleDelete = async () => {
    const ok = window.confirm(`정말로 ${username} 사용자를 삭제하시겠습니까?`);
    if (!ok) return;
    try {
      await fetch(`${BASE_URL}/api/admin/members/delete-member/${username}`, {
        method: "DELETE",
        credentials: "include",
      });

      alert("삭제 완료");
      await refetch();
    } catch (err) {
      alert("삭제 중 오류 발생");
      console.error(err);
    }
  };
  const totalPages = data ? Math.ceil(data.length / 10) : 0;

  const currentItems = data?.slice((currentPage - 1) * 10, currentPage * 10);
  const filteredItems = data?.filter((item) => {
    const value = String(item[searchField]).toLowerCase();
    return value.includes(searchKeyword.toLowerCase());
  });
  const [sortKey, setSortKey] = useState<keyof IAdminProps | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const handleSort = (key: keyof IAdminProps) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };
  const baseItems = isSearching ? filteredItems ?? [] : currentItems ?? [];

  const sortedItems = [...baseItems].sort((a, b) => {
    if (!sortKey) return 0;

    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }

    return (
      String(aVal).localeCompare(String(bVal)) * (sortOrder === "asc" ? 1 : -1)
    );
  });

  return isLoading ? (
    <Loading />
  ) : (
    <div className="overflow-x-auto w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center md:justify-between md:flex-row">
        <SearchBar
          searchField={searchField}
          setSearchField={setSearchField}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        <DeleteBtn
          username={username}
          onChange={handleDeleteChange}
          handleDelete={handleDelete}
        />
      </div>

      <AdminTable
        items={sortedItems}
        handleSort={handleSort}
        sortKey={sortKey}
        sortOrder={sortOrder}
      />

      {!isSearching && <AdminPagination totalPages={totalPages} />}
    </div>
  );
}
