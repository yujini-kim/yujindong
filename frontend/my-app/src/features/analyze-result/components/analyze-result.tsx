'use client'

import Button from '@/components/common/button/button'
import { toast } from '@/components/common/toast/toast'
import { useParams, useRouter } from 'next/navigation'
import { useAnalyzeResultQuery } from '../model/use-analyze-result-query'
import InfoCard from './info-card'
import ResultSkeleton from './result-skeleton'
import ScoreCard from './score-card'
import ShareAnalyzeResult from './share-analyze-result'
import SummaryCard from './summary-card'
import TextCard from './text-card'

export default function AnalyzeResult() {
    const { uuid } = useParams<{ uuid: string }>()
    const router = useRouter()

    if (!uuid) {
        toast.error('오류가 발생했습니다')
        return null
    }

    const { data, isLoading, isError } = useAnalyzeResultQuery(uuid)

    if (isLoading) return <ResultSkeleton />
    if (isError || !data) {
        toast.error('분석 결과를 불러오지 못했습니다')
        return null
    }

    const restart = () => router.back()

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex gap-4">
                    <ScoreCard score={Number(data.score ?? 0)} />
                    <SummaryCard summary={data.summary} />
                </div>
                <div>
                    <InfoCard friendName={data.friendName} recommendation={data.recommendation} />
                    <TextCard text={data.text} />
                </div>
            </div>
            <div className="flex gap-4">
                <Button onClick={restart} variant="ink" className="w-40 lg:w-[336px]">
                    다시하기
                </Button>
                <ShareAnalyzeResult data={data} uuid={uuid} />
            </div>
        </div>
    )
}
