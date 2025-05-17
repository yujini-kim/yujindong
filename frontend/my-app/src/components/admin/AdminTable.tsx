"use client";

import { IAdminProps } from "@/hooks/AdminQuery";

interface AdminTableProps {
  items: IAdminProps[];
}

export default function AdminTable({ items }: AdminTableProps) {
  return (
    <table className="min-w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">이름</th>
          <th className="border p-2">사용자ID</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">분석 횟수</th>
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
