"use client";

import { IAdminProps, useAdminMembersQuery } from "@/hooks/AdminQuery";
import { useMyPageStore } from "@/store/MypageStore";
import { useState } from "react";
import SearchBar, { SearchField } from "./SearchBar";
import AdminTable from "./AdminTable";
import AdminPagination from "./AdminPagenation";
import DeleteBtn from "./DeleteBtn";

export default function AdminContent() {
  const { data } = useAdminMembersQuery();
  const [username, setUsername] = useState("");
  const { currentPage } = useMyPageStore();

  const [searchField, setSearchField] = useState<SearchField>("display_name");
  const [searchKeyword, setSearchKeyword] = useState("");

  const isSearching = searchKeyword.trim() !== "";

  const handleDeleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
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

  return (
    <div>
      <SearchBar
        searchField={searchField}
        setSearchField={setSearchField}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />

      <AdminTable
        items={sortedItems}
        handleSort={handleSort}
        sortKey={sortKey}
        sortOrder={sortOrder}
      />
      {!isSearching && <AdminPagination totalPages={totalPages} />}
      <DeleteBtn username={username} onChange={handleDeleteChange} />
    </div>
  );
}
