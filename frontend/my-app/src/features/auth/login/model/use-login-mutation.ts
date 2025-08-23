import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../../model/auth-store'
import { postLoginAPI } from '../api/login.API'

export const useLoginMutation = () => {
    const setUser = useAuthStore((s) => s.setUser)

    const router = useRouter()
    const mutation = useMutation({
        mutationFn: postLoginAPI,
        onSuccess: (data) => {
            setUser({
                username: data.username,
                isAdmin: data.isAdmin,
            })
            toast.success(`로그인 성공`)
            router.replace('/')
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })
    return mutation
}
