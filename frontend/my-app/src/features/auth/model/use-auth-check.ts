import { BASE_URL } from '@/constants/constants'
import { useEffect, useState } from 'react'

export const useAuthCheck = () => {
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<{ username: string; isAdmin: boolean } | null>(null)

    useEffect(() => {
        const verify = async () => {
            try {
                const res = await fetch(`${BASE_URL}/api/verify`, {
                    method: 'GET',
                    credentials: 'include',
                })
                if (!res.ok) {
                    setIsAuthenticated(false)
                    setUser(null)
                } else {
                    const data = await res.json()
                    setIsAuthenticated(true)
                    setUser(data)
                }
            } catch (err) {
                setIsAuthenticated(false)
            } finally {
                setLoading(false)
            }
        }

        verify()
    }, [])

    return { loading, isAuthenticated, user }
}
