'use client'

import { Logo } from '@/components/icon'
import Link from 'next/link'

interface Props {
    children: React.ReactNode
    footer: React.ReactNode
}

export default function AuthFormLayout({ children, footer }: Props) {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[320px] md:w-[640px] flex flex-col justify-center items-center gap-2 ">
                <Link href="/">
                    <Logo className="w-52 h-28" />
                </Link>
                {children}
                <div className="mt-2">{footer}</div>
            </div>
        </div>
    )
}
