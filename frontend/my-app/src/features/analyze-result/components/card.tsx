import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

const cardVariants = cva('relative flex  items-center justify-center p-2 rounded-lg text-ink-800', {
    variants: {
        orientation: {
            horizontal: 'flex-row w-[334px] h-20',
            vertical: 'flex-col w-40 h-60',
        },
        tone: {
            brand: 'bg-brand-300',
            ink: 'bg-ink-800 text-white',
            border: 'border border-ink-800',
        },
    },
    defaultVariants: {
        orientation: 'vertical',
        tone: 'brand',
    },
})

interface CardProps extends VariantProps<typeof cardVariants> {
    title?: string
    className?: string
    children: React.ReactNode
}

export default function Card({ title, className, children, orientation, tone }: CardProps) {
    return (
        <div className={cn(cardVariants({ orientation, tone }), className)}>
            {title && <h1 className="absolute top-4 left-4 font-semibold">{title}</h1>}
            {children}
        </div>
    )
}
