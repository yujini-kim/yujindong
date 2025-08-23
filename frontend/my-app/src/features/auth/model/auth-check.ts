import { BASE_URL } from '@/constants/constants'
import { useAuthStore } from './auth-store'

export const checkAuth = async () => {
    const { setUser } = useAuthStore.getState()

    try {
        const res = await fetch(`${BASE_URL}/api/verify`, {
            method: 'GET',
            credentials: 'include',
        })

        if (!res.ok) {
            return null
        }

        const data = await res.json()
        const user = { username: data.username, isAdmin: data.admin }
        setUser(user)
        return user
    } catch (err) {
        setUser(null)
        return null
    }
}
