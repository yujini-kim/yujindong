import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../../model/auth-store'
import { getVerifyAPI } from '../../model/verify.API'
import { postLoginAPI } from '../api/login.API'

export const useLoginMutation = () => {
    const setUser = useAuthStore((s) => s.setUser)
    const router = useRouter()

    return useMutation({
        mutationFn: postLoginAPI,
        onSuccess: async () => {
            toast.success('로그인 성공')

            const me = await getVerifyAPI()
            setUser({
                username: me.username,
                isAdmin: me.isAdmin,
            })

            router.replace('/')
        },
        onError: (err) => {
            toast.error(err instanceof Error ? err.message : '로그인 실패')
        },
    })
}
