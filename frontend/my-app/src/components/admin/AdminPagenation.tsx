"use client";

import { useAdminStore } from "@/store/AdminStore";
import { LeftArrow, RightArrow } from "../Icon/Arrow";

interface AdminPaginationProps {
  totalPages: number;
}

export default function AdminPagination({ totalPages }: AdminPaginationProps) {
  const { currentPage, setCurrentPage } = useAdminStore();

  const handlePrev = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="flex justify-center mt-4 gap-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="w-6 h-6 border rounded disabled:opacity-50 cursor-pointer items-center"
      >
        <LeftArrow />
      </button>
      <span className="text-sm">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-6 h-6  border rounded disabled:opacity-50 cursor-pointer"
      >
        <RightArrow />
      </button>
    </div>
  );
}
