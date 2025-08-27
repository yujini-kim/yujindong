import { BASE_URL } from '@/constants/constants'

interface Props {
    text: string
    friend_name: string
}

export const postAnalyzeAPI = async ({ text, friend_name }: Props) => {
    const res = await fetch(`${BASE_URL}/api/analyze`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, friend_name }),
        credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || '분석 요청 실패')
    }

    return data
}
