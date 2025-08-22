'use client'

import Button from '@/components/common/button/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginFormData, loginSchema } from '../model/login.schema'
import { useLoginMutation } from '../model/use-login-mutation'
import LoginFormFields from './login-form-fields'

export default function LoginForm() {
    const loginMutation = useLoginMutation()
    const methods = useForm<LoginFormData>({
        mode: 'onChange',
        resolver: zodResolver(loginSchema),
    })
    const onSubmit = (formData: LoginFormData) => {
        loginMutation.mutate(formData)
    }
    return (
        <>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="w-full flex flex-col justify-center items-center gap-2"
                >
                    <LoginFormFields />
                    <Button disabled={loginMutation.isPending || !methods.formState.isValid} className="w-full mt-8">
                        로그인 하기
                    </Button>
                </form>
            </FormProvider>
        </>
    )
}
