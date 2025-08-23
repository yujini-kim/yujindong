import { BASE_URL } from '@/constants/constants'

export const postLogoutAPI = async () => {
    const res = await fetch(`${BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
    })
    const data = await res.text()
    if (!res.ok) {
        throw new Error(data)
    }

    return data
}
