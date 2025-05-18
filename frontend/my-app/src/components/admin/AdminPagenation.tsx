"use client";

import { useMyPageStore } from "@/store/MypageStore";

interface AdminPaginationProps {
  totalPages: number;
}

export default function AdminPagination({ totalPages }: AdminPaginationProps) {
  const { currentPage, setCurrentPage } = useMyPageStore();

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
        className="px-4 py-1 border rounded disabled:opacity-50 cursor-pointer"
      >
        이전
      </button>
      <span className="text-sm">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-1 border rounded disabled:opacity-50 cursor-pointer"
      >
        다음
      </button>
    </div>
  );
}
