import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { postLoginAPI } from '../api/login.API'

export const useLoginMutation = () => {
    const mutation = useMutation({
        mutationFn: postLoginAPI,
        onSuccess: () => {
            toast.success('로그인 성공')
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })
    return mutation
}
