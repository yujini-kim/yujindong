import Card from './card'
import ResultCircle from './score-circle'

export default function ScoreCard({ score }: { score: number }) {
    return (
        <Card title="친밀도 점수" orientation="vertical" tone="border">
            <ResultCircle score={score} />
        </Card>
    )
}
