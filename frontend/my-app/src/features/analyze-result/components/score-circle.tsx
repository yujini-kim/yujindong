'use client'

import { motion } from 'framer-motion'

interface Props {
    score: number
}

export default function ScoreCircle({ score }: Props) {
    const angle = score * 3.6

    return (
        <div className="relative w-[120px] h-[120px] md:w-[90px] md:h-[90px]">
            <motion.div
                className="w-full h-full rounded-full"
                style={{
                    background: `conic-gradient(#FDA4AF var(--angle), #E5E7EB 0deg)`,
                }}
                initial={{ ['--angle' as any]: '0deg' }}
                animate={{ ['--angle' as any]: `${angle}deg` }}
                transition={{ duration: 1, ease: 'easeOut' }}
            />
            <div className="absolute flex items-center justify-center text-sm font-bold bg-white rounded-full w-[104px] h-[104px] top-[8px] left-[8px] md:w-[78px] md:h-[78px] md:top-[6px] md:left-[6px]">
                {score}점
            </div>
        </div>
    )
}
