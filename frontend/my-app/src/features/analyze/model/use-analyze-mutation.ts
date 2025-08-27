import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { postAnalyzeAPI } from '../api/post-analyze.API'

export const useAnalyzeMutation = () => {
    const mutation = useMutation({
        mutationFn: postAnalyzeAPI,
        onSuccess: (data) => {
            toast.success(`분석완료`)
            console.log(data)
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })
    return mutation
}
