import { ErrorMessage } from '@hookform/error-message'
import FormErrorMessage from './form-error-message'

import { cn } from '@/utils/cn'
import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    name: string
}

export default function FormField({ name, children, className, ...rest }: Props) {
    return (
        <div className={cn('w-full flex flex-col gap-1', className)} {...rest}>
            {children}
            <ErrorMessage name={name} render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>} />
        </div>
    )
}
