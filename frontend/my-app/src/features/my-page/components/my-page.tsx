'use client'

import { useState } from 'react'
import { useMyPageQuery } from '../model/use-my-page-query'
import MyPageDataTable from './my-page-data-table'
import Pagenation from './pagenation'
export default function MyPage() {
    const [page, setPage] = useState(0)
    const { data } = useMyPageQuery(page)
    return (
        <div className="flex flex-col items-center justify-center px-10 gap-4">
            {data && <MyPageDataTable data={data} />}
            <Pagenation data={data} page={page} setPage={setPage} />
        </div>
    )
}
