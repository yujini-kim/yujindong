import { BASE_URL } from '@/constants/constants'
import { MyPageType } from '../model/my-page.types'

export const getMypageAPI = async (page: number): Promise<MyPageType> => {
    const res = await fetch(`${BASE_URL}/api/mypage?page=${page}&size=5`, {
        credentials: 'include',
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data
}
