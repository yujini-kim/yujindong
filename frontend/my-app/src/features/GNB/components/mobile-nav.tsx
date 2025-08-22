import { motion } from 'framer-motion'
import Link from 'next/link'

const listVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -40, opacity: 0 },
}

interface Props {
    onClick?: () => void
}

export default function MobileNav({ onClick }: Props) {
    return (
        <motion.nav
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="md:hidden"
        >
            <ul onClick={onClick} className="flex flex-col items-center justify-center py-4 gap-2  bg-brand-300">
                <Link href="/analyze">
                    <li className="text-white font-medium hover:text-ink-700">분석하기</li>
                </Link>
                <Link href="/mypage">
                    <li className="text-white font-medium hover:text-ink-700">마이페이지</li>
                </Link>
                <Link href="/login">
                    <li className="text-white font-medium hover:text-ink-700">로그인</li>
                </Link>
            </ul>
        </motion.nav>
    )
}
