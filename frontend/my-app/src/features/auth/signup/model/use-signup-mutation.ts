import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postSignupAPI } from '../api/signup.API'

export const useSignupMutation = () => {
    const router = useRouter()

    const mutation = useMutation({
        mutationFn: postSignupAPI,
        onSuccess: () => {
            toast.success('회원가입 성공')
            router.replace('/login')
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })
    return mutation
}
