'use cli'

import { IconVisibilityOff, IconVisibilityOn } from '@/components/icon'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Input from '../../../components/common/input/input'

interface Props {
    fieldName: string
    title: string
}

export default function PasswordInput({ fieldName, title }: Props) {
    const { register } = useFormContext()

    const [onVisible, setOnVisible] = useState(false)

    const onClick = () => {
        setOnVisible((prev) => !prev)
    }

    return (
        <Input
            type={onVisible ? 'text' : 'password'}
            title={title}
            fieldName={fieldName}
            {...register(fieldName)}
            icon={
                <div onClick={onClick} className="cursor-pointer">
                    {onVisible ? <IconVisibilityOn /> : <IconVisibilityOff />}
                </div>
            }
        />
    )
}
