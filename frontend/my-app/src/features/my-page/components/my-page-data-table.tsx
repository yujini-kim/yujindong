import { MyPageType } from '../model/my-page.types'

export interface Props {
    data: MyPageType
}

export default function MyPageDataTable({ data }: Props) {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table-fixed min-w-full border-collapse border border-gray-200 text-sm">
                <thead className="bg-ink-100">
                    <tr>
                        <th className="w-1/12 border border-ink-300 py-2 text-center">No</th>
                        <th className="w-8/12 md:w-10/12 border border-ink-300 py-2 text-center">분석요약</th>
                        <th className="w-3/12 md:w-1/12 border border-ink-300 py-2 text-center">추천금액</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((item) => (
                        <tr key={item.index} className="border-b">
                            <td className="border border-ink-300 px-4 py-3 text-center">{item.index}</td>
                            <td className="border border-ink-300 px-4 py-3">
                                <div className="font-semibold">{item.friend_name}</div>
                                <div className="text-gray-600 text-sm">
                                    {item.summary.split('\n-').join(',').length > 100
                                        ? item.summary.split('\n-').join(',').slice(0, 100) + '...'
                                        : item.summary.split('\n-').join(',')}
                                </div>
                            </td>
                            <td className="border border-ink-300 px-4 py-3 text-center">{item.recommendation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
