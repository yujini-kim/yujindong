import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'
import FormErrorMessage from './form-error-message'

import { cn } from '@/utils/cn'
import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    name: string
}

export default function FormField({ name, children, className, ...rest }: Props) {
    const {
        formState: { errors },
    } = useFormContext()

    return (
        <div className={cn('flex flex-col gap-1', className)} {...rest}>
            {children}
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
            />
        </div>
    )
}
