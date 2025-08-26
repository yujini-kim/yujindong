import { BASE_URL } from '@/constants/constants'

interface Props {
    text: string
    friend_name: string
}

export const postAnalyze = async ({ text, friend_name }: Props) => {
    await fetch(`${BASE_URL}/api/analyze`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, friend_name }),
        credentials: 'include',
    })
}
