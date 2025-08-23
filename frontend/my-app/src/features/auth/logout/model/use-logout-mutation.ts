import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../../model/auth-store'
import { postLogoutAPI } from '../api/logout.API'

export const useLogoutMutation = () => {
    const setUser = useAuthStore((s) => s.setUser)

    const router = useRouter()
    const mutation = useMutation({
        mutationFn: postLogoutAPI,
        onSuccess: () => {
            setUser(null)
            toast.success('로그아웃 성공')
            router.replace('/')
        },
        onError: (err) => {
            toast.error('로그아웃 실패')
        },
    })
    return mutation
}
