import { useEffect } from 'react'
import { useAuthStore } from './auth-store'
import { getVerifyAPI } from './verify.API'

export const useInitAuth = () => {
    const setUser = useAuthStore((s) => s.setUser)

    useEffect(() => {
        const init = async () => {
            try {
                const me = await getVerifyAPI()
                setUser({ username: me.username, isAdmin: me.isAdmin })
            } catch {
                setUser(null)
            }
        }
        init()
    }, [setUser])
}
