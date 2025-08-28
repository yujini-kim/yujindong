import Card from './card'

export default function SummaryCard({ summary }: { summary: string }) {
    return (
        <Card title="3줄 요약" orientation="vertical" tone="brand">
            <ul className="h-full px-2 pb-2 mt-10 scrollbar-hide overflow-y-auto ">
                {summary.split('\n').map((item, idx) => (
                    <li className="text-sm" key={idx}>
                        {item}
                    </li>
                ))}
            </ul>
        </Card>
    )
}
