'use client'

import Button from '@/components/common/button/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { SignupFormData, signupSchema } from '../model/signup.schma'
import { useSignupMutation } from '../model/use-signup-mutation'
import SignupFormFields from './sign-up-form-fields'

export default function SignupForm() {
    const signUpmutation = useSignupMutation()
    const methods = useForm<SignupFormData>({
        mode: 'onChange',
        resolver: zodResolver(signupSchema),
    })
    const onSubmit = (formData: SignupFormData) => {
        const { passwordConfirm, ...payload } = formData
        signUpmutation.mutate(payload)
    }
    return (
        <>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="w-full flex flex-col justify-center items-center gap-2"
                >
                    <SignupFormFields />
                    <Button className="w-full mt-8">회원가입 하기</Button>
                </form>
            </FormProvider>
        </>
    )
}
