import Card from './card'

export default function InfoCard({ friendName, recommendation }: { friendName: string; recommendation: string }) {
    return (
        <Card orientation="horizontal" tone="ink" className="justify-between px-10 mb-4">
            <div className="flex flex-col items-center gap-1">
                <h1 className="font-semibold">대화상대</h1>
                <span>{friendName}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <h1 className="font-semibold">추천금액</h1>
                <span>{recommendation}</span>
            </div>
        </Card>
    )
}
