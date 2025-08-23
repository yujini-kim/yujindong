import { BASE_URL } from '@/constants/constants'

export const postLogoutAPI = async () => {
    const res = await fetch(`${BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
    })
    const data = await res.json()
    if (!res.ok) {
        const message = data?.message || `HTTP error! status: ${res.status}`
        throw new Error(message)
    }

    return data
}
