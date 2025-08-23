import { useAuthStore } from '@/features/auth/model/auth-store'
import Link from 'next/link'
import LogoutButton from './logout-button'

export default function DesktopNav() {
    const { user } = useAuthStore()

    return (
        <nav className="hidden md:flex">
            <ul className="flex px-4 justify-end gap-4">
                <li>
                    <Link href="/analyze" className="font-medium text-ink-700 hover:text-white ">
                        분석하기
                    </Link>
                </li>
                <li>
                    <Link href="/mypage" className="font-medium text-ink-700 hover:text-white">
                        마이페이지
                    </Link>
                </li>
                {!user ? (
                    <li>
                        <Link href="/login" className="font-medium text-ink-700 hover:text-white">
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
