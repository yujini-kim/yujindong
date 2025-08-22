import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const ButtonVariants = cva('flex items-center justify-center rounded-xl px-4 py-3 cursor-pointer', {
    variants: {
        variant: {
            default: 'bg-brand-200 text-ink-900 hover:bg-brand-300',
            disable: 'bg-ink-300 text-ink-600 hover:bg-ink-400',
            accent: 'bg-brand-500 text-ink-900',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {}

export default function Button({ variant, className, children, disabled, ...restProps }: Props) {
    return (
        <button
            disabled={disabled}
            className={cn(ButtonVariants({ variant: disabled ? 'disable' : variant, className }))}
            {...restProps}
        >
            {children}
        </button>
    )
}
