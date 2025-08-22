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
            className="md:hidden flex flex-col items-center justify-center py-4 gap-2 bg-brand-300"
        >
            <li>
                <Link href="/analyze" onClick={onClick} className="text-white hover:text-ink-700">
                    분석하기
                </Link>
            </li>
            <li>
                <Link href="/mypage" onClick={onClick} className="text-white hover:text-ink-700">
                    마이페이지
                </Link>
            </li>
            <li>
                <Link href="/login" onClick={onClick} className="text-white hover:text-ink-700">
                    로그인
                </Link>
            </li>
        </motion.nav>
    )
}
