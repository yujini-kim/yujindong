import { useLogoutMutation } from '@/features/auth/logout/model/use-logout-mutation'

export default function LogoutButton() {
    const logoutMutation = useLogoutMutation()
    const logout = () => {
        logoutMutation.mutate()
    }
    return (
        <li>
            <button onClick={logout} className="text-white hover:text-ink-700">
                로그아웃
            </button>
        </li>
    )
}
