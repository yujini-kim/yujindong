import { useMyPageStore } from '@/store/MypageStore'
interface Props {
    totalPages: number
}
export default function Pagenation({ totalPages }: Props) {
    const { currentPage, setCurrentPage } = useMyPageStore()
    return (
        <div className="flex gap-2 mt-4">
            <button
                className="w-6 h-6 bg-[#E3DBCE] border-2 cursor-pointer"
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))}
                disabled={currentPage === 1}
            ></button>
            <p>
                {currentPage} / {totalPages}
            </p>
            <button
                className="w-6 h-6 bg-[#E3DBCE] border-2 cursor-pointer"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= totalPages - 1}
            ></button>
        </div>
    )
}
