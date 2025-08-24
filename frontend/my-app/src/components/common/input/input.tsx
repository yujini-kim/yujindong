import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { InputHTMLAttributes, ReactNode } from 'react'

const InputVariants = cva('w-full px-4 py-3 rounded focus:border-ink-800 focus:outline-none pr-10', {
    variants: {
        inputType: {
            file: 'hidden',
            text: 'bg-ink-200 border',
        },
    },
    defaultVariants: {
        inputType: 'text',
    },
})

const LabelVariants = cva('text-sm font-medium text-ink-900', {
    variants: {
        inputType: {
            file: 'cursor-pointer border border-ink-900',
            text: '',
        },
    },
})

interface Props extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof InputVariants> {
    title?: string
    fieldName: string
    icon?: ReactNode
}

export default function Input({ title, fieldName, type, inputType, icon, className, ...rest }: Props) {
    return (
        <div className="w-full flex flex-col gap-1">
            <label htmlFor={fieldName} className={cn(LabelVariants({ inputType: type === 'file' ? 'file' : 'text' }))}>
                {title}
            </label>
            <div className="relative">
                <input
                    id={fieldName}
                    type={type}
                    className={cn(InputVariants({ inputType: type === 'file' ? 'file' : 'text' }), className)}
                    {...rest}
                />
                {icon && <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">{icon}</span>}
            </div>
        </div>
    )
}
