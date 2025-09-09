import { BASE_URL } from '@/constants/constants'

export interface VerifyResponse {
    username: string
    message: string
    isAdmin: boolean
}

export const getVerifyAPI = async (): Promise<VerifyResponse> => {
    const res = await fetch(`${BASE_URL}/api/verify`, {
        method: 'GET',
        credentials: 'include',
    })

    if (!res.ok) {
        throw new Error('유저 인증 실패')
    }

    return res.json()
}
