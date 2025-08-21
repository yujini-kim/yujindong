import FormField from '@/components/common/form/form-field'
import Input from '@/components/common/input/input'
import PasswordInput from '@/featuers/auth/components/password-input'
import { useFormContext } from 'react-hook-form'

export default function SignupFormFields() {
    const { register } = useFormContext()
    return (
        <>
            <FormField name="displayName">
                <Input title="이름" fieldName="displayName" {...register('displayName')} />
            </FormField>
            <FormField name="username">
                <Input title="아이디" fieldName="username" {...register('username')} />
            </FormField>
            <FormField name="email">
                <Input type="email" title="이메일" fieldName="email" {...register('email')} />
            </FormField>
            <FormField name="password">
                <PasswordInput title="비밀번호" fieldName="password" />
            </FormField>
            <FormField name="passwordConfirm">
                <PasswordInput title="비밀번호 확인" fieldName="passwordConfirm" />
            </FormField>
        </>
    )
}
