"use clinet";

import AdminContent from "@/components/admin/AdminContent";
import AdminGuard from "@/components/admin/AdminGuard";

export default function Admin() {
  return (
    <AdminGuard>
      <div className="p-4">
        <AdminContent />
      </div>
    </AdminGuard>
  );
}
