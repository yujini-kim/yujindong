export default function ResultSkeleton() {
    return (
        <div
            role="status"
            aria-live="polite"
            aria-busy="true"
            className="flex flex-col items-center justify-center gap-4 animate-pulse"
        >
            <span className="sr-only">분석 결과를 불러오는 중...</span>
            {/* 위쪽 카드 2개 */}
            <div className="flex gap-4">
                {/* 왼쪽 카드 */}
                <div className="relative flex flex-col items-center justify-center w-40 h-60 border border-ink-800 rounded-lg p-2">
                    <div className="absolute top-4 left-4 w-20 h-6 bg-ink-300 rounded" />
                    <div className="w-[120px] h-[120px] rounded-full bg-ink-300" />
                </div>
                {/* 오른쪽 카드 */}
                <div className="relative flex flex-col justify-center w-40 h-60 rounded-lg bg-brand-300 p-2 gap-2">
                    <div className="absolute top-4 left-4 w-20 h-6 bg-ink-50 rounded" />

                    <div className="h-3 w-28 bg-ink-50 rounded" />
                    <div className="h-3 w-24 bg-ink-50 rounded" />
                    <div className="h-3 w-32 bg-ink-50 rounded" />
                </div>
            </div>

            {/* 가운데 가로 카드 */}
            <div className="flex justify-between items-center w-[334px] h-20 bg-ink-800 text-white rounded-lg px-10">
                <div className="flex flex-col items-center gap-1">
                    <div className="h-3 w-12 bg-ink-50 rounded" />
                    <div className="h-4 w-16 bg-ink-50 rounded" />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="h-3 w-12 bg-ink-50 rounded" />
                    <div className="h-4 w-16 bg-ink-50 rounded" />
                </div>
            </div>

            {/* 아래 텍스트 박스 */}
            <div className="w-[334px] flex flex-col justify-center h-40 border border-ink-800 rounded-lg p-2 space-y-2 overflow-hidden">
                <div className="h-3 w-full bg-ink-300 rounded" />
                <div className="h-3 w-full bg-ink-300 rounded" />
                <div className="h-3 w-full bg-ink-300 rounded" />
                <div className="h-3 w-full bg-ink-300 rounded" />
                <div className="h-3 w-full bg-ink-300 rounded" />
                <div className="h-3 w-full bg-ink-300 rounded" />
                <div className="h-3 w-full bg-ink-300 rounded" />
            </div>
        </div>
    )
}
