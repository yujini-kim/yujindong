'use client'

import { Logo } from '@/components/icon'

interface Props {
    children: React.ReactNode
    footer: React.ReactNode
}

export default function AuthFormLayout({ children, footer }: Props) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 px-7">
            <Logo className="w-52 h-28" />
            {children}
            <div className="mt-2">{footer}</div>
        </div>
    )
}
