import AuthGuard from '@/features/auth/components/auth-guard'
import Card from '@/features/my-page/components/my-page-card'

export default function Mypage() {
    return (
        <AuthGuard>
            <Card />
        </AuthGuard>
    )
}
