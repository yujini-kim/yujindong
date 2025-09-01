import { BASE_URL } from '@/constants/constants'

export const getMypageAPI = async (page: number, size: number) => {
    const res = await fetch(`${BASE_URL}/api/mypage?page=${page}&size=${size}`, {
        credentials: 'include',
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data
}
