import { ArrowLeft, ArrowRight } from '@/components/icon'
import { Dispatch, SetStateAction } from 'react'
import { MyPageType } from '../model/my-page.types'

interface Props {
    page: number
    setPage: Dispatch<SetStateAction<number>>
    data: MyPageType | undefined
}

export default function Pagenation({ page, setPage, data }: Props) {
    return (
        <div className="flex gap-2">
            <button disabled={page === 0} onClick={() => setPage((prev) => prev - 1)}>
                <ArrowLeft />
            </button>
            <span>{data ? data.currentPage + 1 : '-'}</span>
            <button disabled={page === (data?.totalPages ?? 0) - 1} onClick={() => setPage((prev) => prev + 1)}>
                <ArrowRight />
            </button>
        </div>
    )
}
