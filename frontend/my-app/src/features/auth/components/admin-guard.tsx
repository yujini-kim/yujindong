'use client'

import { toast } from '@/components/common/toast/toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthStore } from '../model/auth-store'

export function AdminGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const user = useAuthStore((s) => s.user)

    useEffect(() => {
        if (user === null) {
            toast.error('로그인 후 이용 가능합니다')
            router.replace('/login')
        } else if (!user.isAdmin) {
            toast.error('관리자만 접근 가능합니다')
            router.replace('/')
        }
    }, [user, router])

    if (user === null || !user.isAdmin) return null
    return <>{children}</>
}
