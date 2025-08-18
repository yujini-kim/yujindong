'use client'

import Button from '@/components/common/button/button'
import FormField from '@/components/common/form/form-field'
import Input from '@/components/common/input/input'
import { FormProvider, useForm } from 'react-hook-form'
import { SignupFormData } from '../../featuers/signup/model/signup.types'
import { useSignup } from '../../featuers/signup/model/use-signup'

export default function Signup() {
    const signUpmutation = useSignup()
    const methods = useForm<SignupFormData>({ mode: 'onChange' })
    const onSubmit = (formData: SignupFormData) => {
        const { passwordConfirm, ...payload } = formData // passwordConfirm 제외
        signUpmutation.mutate(payload)
    }
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="w-[320px] flex flex-col justify-center items-center gap-2"
            >
                <FormField name="displayName">
                    <Input
                        title="이름"
                        fieldName="displayName"
                        {...methods.register('displayName', {
                            required: { value: true, message: '이름을 입력해 주세요' },
                            minLength: { value: 2, message: '이름은 최소 2자 이상입니다' },
                        })}
                    />
                </FormField>
                <FormField name="username">
                    <Input
                        title="아이디"
                        fieldName="username"
                        {...methods.register('username', {
                            required: { value: true, message: '아이디를 입력해 주세요' },
                            minLength: { value: 2, message: '아이디는 최소 2자 이상입니다' },
                        })}
                    />
                </FormField>
                <FormField name="email">
                    <Input
                        title="이메일"
                        fieldName="email"
                        {...methods.register('email', {
                            required: { value: true, message: '이메일을 입력해 주세요' },
                            pattern: {
                                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                                message: '이메일 형식으로 작성해주세요',
                            },
                        })}
                    />
                </FormField>
                <FormField name="password">
                    <Input
                        type="password"
                        title="비밀번호"
                        fieldName="password"
                        {...methods.register('password', {
                            required: { value: true, message: '비밀번호를 입력해 주세요' },
                            minLength: { value: 6, message: '비밀번호는 최소 6자 이상입니다' },
                        })}
                    />
                </FormField>
                <FormField name="passwordConfirm">
                    <Input
                        type="password"
                        title="비밀번호 확인"
                        fieldName="passwordConfirm"
                        {...methods.register('passwordConfirm', {
                            required: { value: true, message: '비밀번호를 입력해 주세요' },
                            minLength: { value: 6, message: '비밀번호는 최소 6자 이상입니다' },
                            validate: {
                                check: (value) => {
                                    if (methods.getValues('password') !== value) {
                                        return '비밀번호가 일치하지 않습니다'
                                    }
                                },
                            },
                        })}
                    />
                </FormField>

                <Button>회원가입 하기</Button>
            </form>
        </FormProvider>
    )
}
