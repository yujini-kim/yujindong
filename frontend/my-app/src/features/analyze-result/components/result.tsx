'use client'

import { toast } from '@/components/common/toast/toast'
import { useParams } from 'next/navigation'
import { useAnalyzeResultQuery } from '../model/use-analyze-result-query'

export default function AnaylzeResult() {
    const { uuid } = useParams<{ uuid: string }>()

    if (!uuid) {
        toast.error('오류가 발생했습니다')
    }

    const { data } = useAnalyzeResultQuery(uuid)
    console.log(data)
    return (
        <>
            <div>점수: {data?.score}</div>
            <div>친구이름: {data?.friendName}</div>
        </>
    )
}
