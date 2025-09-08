import AuthGuard from '@/features/auth/components/auth-guard'
import MyPage from '@/features/my-page/components/my-page'

export default function Mypage() {
    return (
        <AuthGuard>
            <MyPage />
        </AuthGuard>
    )
}
