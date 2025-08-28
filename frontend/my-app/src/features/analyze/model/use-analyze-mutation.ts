'use client'

import { toast } from '@/components/common/toast/toast'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postAnalyzeAPI } from '../api/post-analyze.API'

export const useAnalyzeMutation = () => {
    const router = useRouter()
    const mutation = useMutation({
        mutationFn: postAnalyzeAPI,
        onSuccess: (data) => {
            router.push(`/result/${data.shareUuid}`)
            toast.success(`분석완료`)
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })
    return mutation
}
