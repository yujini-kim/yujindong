"use client";

import { IAdminProps } from "@/hooks/AdminQuery";

interface AdminTableProps {
  items: IAdminProps[];
  handleSort: (key: keyof IAdminProps) => void;
  sortKey: keyof IAdminProps | null;
  sortOrder: "asc" | "desc";
}

export default function AdminTable({
  items,
  handleSort,
  sortKey,
  sortOrder,
}: AdminTableProps) {
  return (
    <table className="min-w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100 border p-2">
        <tr>
          <th
            className="border p-2 align-middle cursor-pointer"
            onClick={() => handleSort("id")}
          >
            <span className="inline-flex items-center justify-center gap-2">
              ID
              {sortKey === "id" && (sortOrder === "asc" ? "▲" : "▼")}
            </span>
          </th>
          <th
            className="border p-2 align-middle cursor-pointer"
            onClick={() => handleSort("display_name")}
          >
            <span className="inline-flex items-center justify-center gap-2">
              이름
              {sortKey === "display_name" && (sortOrder === "asc" ? "▲" : "▼")}
            </span>
          </th>
          <th
            className="border p-2 align-middle cursor-pointer"
            onClick={() => handleSort("username")}
          >
            <span className="inline-flex items-center justify-center gap-2">
              사용자 ID
              {sortKey === "username" && (sortOrder === "asc" ? "▲" : "▼")}
            </span>
          </th>
          <th
            className="border p-2 align-middle cursor-pointer"
            onClick={() => handleSort("email")}
          >
            <span className="inline-flex items-center justify-center gap-2">
              E-MAIL
              {sortKey === "email" && (sortOrder === "asc" ? "▲" : "▼")}
            </span>
          </th>
          <th
            className="border p-2 align-middle cursor-pointer"
            onClick={() => handleSort("analyzeCount")}
          >
            <span className="inline-flex items-center justify-center gap-2">
              분석횟수
              {sortKey === "analyzeCount" && (sortOrder === "asc" ? "▲" : "▼")}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((admin) => (
          <tr key={admin.id} className="text-center">
            <td className="border p-2">{admin.id}</td>
            <td className="border p-2">{admin.display_name}</td>
            <td className="border p-2">{admin.username}</td>
            <td className="border p-2">{admin.email}</td>
            <td className="border p-2">{admin.analyzeCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
