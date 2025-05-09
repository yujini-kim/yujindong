import { useMyPageStore } from "@/store/MypageStore";
import { LeftArrow, RightArrow } from "../Icon/Arrow";
interface Props {
  totalPages: number;
}
export default function Pagination({ totalPages }: Props) {
  const { currentPage, setCurrentPage } = useMyPageStore();
  return (
    <div className="flex gap-2 mt-4">
      <button
        className="w-6 h-6 bg-[#E3DBCE] border-2 cursor-pointer"
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))}
        disabled={currentPage === 0}
      >
        <LeftArrow />
      </button>
      <p>
        {currentPage + 1} / {totalPages}
      </p>
      <button
        className="w-6 h-6 bg-[#E3DBCE] border-2 cursor-pointer"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
      >
        <RightArrow />
      </button>
    </div>
  );
}
