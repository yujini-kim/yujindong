import Card from './card'

export default function TextCard({ text }: { text: string }) {
    return (
        <Card orientation="horizontal" tone="border" className="h-40 lg:h-36">
            <div className="overflow-y-auto scrollbar-hide h-full p-2 text-sm">{text}</div>
        </Card>
    )
}
