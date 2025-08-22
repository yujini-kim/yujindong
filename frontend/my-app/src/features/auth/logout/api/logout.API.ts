import { BASE_URL } from '@/constants/constants'

export const postLogoutAPI = async () => {
    const res = await fetch(`${BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
    })

    if (!res.ok) {
        const errorData = await res.json().catch(() => null)
        const message = errorData?.message || `HTTP error! status: ${res.status}`
        throw new Error(message)
    }

    return res.json()
}
