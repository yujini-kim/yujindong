'use client'

import { toast } from '@/components/common/toast/toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthStore } from '../model/auth-store'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const user = useAuthStore((s) => s.user)

    useEffect(() => {
        if (user === null) {
            toast.error('로그인 후 이용 가능합니다')
            router.replace('/login')
        }
    }, [user, router])

    return <>{children}</>
}
