import { useAuthStore } from '@/features/auth/model/auth-store'
import Link from 'next/link'
import LogoutButton from './logout-button'

export default function DesktopNav() {
    const { user } = useAuthStore()

    return (
        <nav className="hidden md:flex">
            <ul className="flex bg-brand-300 px-4 justify-end gap-4">
                <li>
                    <Link href="/analyze" className="text-white hover:text-ink-700">
                        분석하기
                    </Link>
                </li>
                <li>
                    <Link href="/mypage" className="text-white hover:text-ink-700">
                        마이페이지
                    </Link>
                </li>
                {!user ? (
                    <li>
                        <Link href="/login" className="text-white hover:text-ink-700">
                            로그인
                        </Link>
                    </li>
                ) : (
                    <LogoutButton />
                )}
            </ul>
        </nav>
    )
}
