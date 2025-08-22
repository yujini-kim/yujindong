import Link from 'next/link'

export default function DesktopNav() {
    return (
        <nav className="hidden md:flex bg-brand-300 px-4 justify-end gap-6">
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
            <li>
                <Link href="/login" className="text-white hover:text-ink-700">
                    로그인
                </Link>
            </li>
        </nav>
    )
}
