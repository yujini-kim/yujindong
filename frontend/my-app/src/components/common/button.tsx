import { cn } from "@/lib/cn"
import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"



const ButtonVariants = cva('flex items-center justify-center rounded-xl px-4 py-3',
{
    variants: {
        variant: {
            default:'bg-brand-300 text-ink-900',
            hover: 'bg-brand-400 text-ink-900',
            enable: 'bg-ink-300 text-ink-500',
            enableHover: 'bg-ink-400 text-ink-500',
            accent: 'bg-brand-500 text-ink-900'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
}
)

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {}

export default function Button({variant, className, children, ...restProps}:Props){
    return   <button className={cn(ButtonVariants({ variant, className }))} {...restProps}>{children}</button>
}