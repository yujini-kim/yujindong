'use client'

import { IconMenu, LogoWhite } from '@/components/icon'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'

export default function GnbLayout() {
    const [openMenu, setOpenMenu] = useState(false)
    const onMenuClick = () => setOpenMenu((prev) => !prev)
    return (
        <>
            <div className="bg-brand-300 flex items-center justify-between px-2">
                <Link href="/">
                    <LogoWhite className="size-20" />
                </Link>
                <DesktopNav />
                <button
                    aria-expanded={openMenu}
                    aria-controls="mobile-menu"
                    onClick={onMenuClick}
                    className="md:hidden pr-3"
                >
                    <IconMenu className="size-7 cursor-pointer" />
                </button>
            </div>
            <AnimatePresence>{openMenu && <MobileNav onClick={onMenuClick} />}</AnimatePresence>
        </>
    )
}
