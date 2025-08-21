import { cn } from '@/utils/cn'
import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    title: string
    fieldName: string
    className?: string
}

export default function Input({ title, fieldName, className, ...rest }: Props) {
    return (
        <>
            <label className="text-ink-800 font-semibold" htmlFor={fieldName}>
                {title}
            </label>
            <input
                id={fieldName}
                className={cn('bg-ink-200 px-4 py-3 rounded border focus:border-ink-800 focus:outline-none', className)}
                {...rest}
            />
        </>
    )
}
