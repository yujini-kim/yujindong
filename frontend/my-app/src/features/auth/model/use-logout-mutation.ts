import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postLogoutAPI } from '../logout/api/logout.API'

export const useLogoutMutation = () => {
    const router = useRouter()
    const mutation = useMutation({
        mutationFn: postLogoutAPI,
        onSuccess: () => {
            toast.success('로그아웃 성공')
            router.replace('/')
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })
    return mutation
}
