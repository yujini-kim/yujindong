import Link from 'next/link'

export default function DesktopNav() {
    return (
        <nav className="hidden md:flex bg-brand-300 px-4 justify-end gap-6">
            <Link href="/analyze" className="text-white hover:text-ink-700">
                분석하기
            </Link>
            <Link href="/mypage" className="text-white hover:text-ink-700">
                마이페이지
            </Link>
            <Link href="/login" className="text-white hover:text-ink-700">
                로그인
            </Link>
        </nav>
    )
}
