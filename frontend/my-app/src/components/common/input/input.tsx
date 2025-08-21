import { cn } from '@/utils/cn'
import { InputHTMLAttributes, ReactNode } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    title: string
    fieldName: string
    icon?: ReactNode
}

export default function Input({ title, fieldName, icon, className, ...rest }: Props) {
    return (
        <div className="w-full flex flex-col gap-1">
            <label htmlFor={fieldName} className="text-sm font-medium text-ink-900">
                {title}
            </label>
            <div className="relative">
                <input
                    id={fieldName}
                    className={cn(
                        'w-full bg-ink-200 px-4 py-3 rounded border focus:border-ink-800 focus:outline-none pr-10', // pr-10 오른쪽 여백 확보
                        className,
                    )}
                    {...rest}
                />
                {icon && <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">{icon}</span>}
            </div>
        </div>
    )
}
