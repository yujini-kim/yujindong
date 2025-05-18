"use client";

export type SearchField =
  | "id"
  | "display_name"
  | "username"
  | "email"
  | "analyzeCount";

interface SearchBarProps {
  searchField: SearchField;
  setSearchField: (field: SearchField) => void;
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
}

export default function SearchBar({
  searchField,
  setSearchField,
  searchKeyword,
  setSearchKeyword,
}: SearchBarProps) {
  return (
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
  );
}
