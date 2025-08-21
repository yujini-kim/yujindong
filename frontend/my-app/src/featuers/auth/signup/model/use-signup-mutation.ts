import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { postSignupAPI } from '../api/signup.API'

export const useSignupMutation = () => {
    const mutation = useMutation({
        mutationFn: postSignupAPI,
        onSuccess: () => {
            toast.success('회원가입 성공')
        },
        onError: () => {
            toast.error('회원가입 실패')
        },
    })
    return mutation
}
