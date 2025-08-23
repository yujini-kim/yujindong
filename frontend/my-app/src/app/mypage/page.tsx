import AuthGuard from '@/features/auth/components/auth-guard'

export default function Mypage() {
    return (
        <AuthGuard>
            <div className="min-h-screen flex flex-col justify-center items-center gap-4">마이페이지</div>
        </AuthGuard>
    )
}
