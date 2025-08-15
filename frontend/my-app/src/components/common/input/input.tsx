import { cn } from '@/lib/cn'
import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    fieldName: string
    title: string
    className: string
}

export default function Input({ fieldName, title, className, ...rest }: Props) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-ink-800 font-semibold" htmlFor={fieldName}>
                {title}
            </label>
            <input
                className={cn('bg-ink-200 px-4 py-3 rounded border focus:border-ink-800 focus:outline-none', className)}
                id={fieldName}
                {...rest}
            />
        </div>
    )
}
