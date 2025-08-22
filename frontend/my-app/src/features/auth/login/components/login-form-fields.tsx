import FormField from '@/components/common/form/form-field'
import Input from '@/components/common/input/input'
import PasswordInput from '@/featuers/auth/components/password-input'
import { useFormContext } from 'react-hook-form'

export default function LoginFormFields() {
    const { register } = useFormContext()
    return (
        <>
            <FormField name="username">
                <Input type="username" title="아이디" fieldName="username" {...register('username')} />
            </FormField>
            <FormField name="password">
                <PasswordInput title="비밀번호" fieldName="password" />
            </FormField>
        </>
    )
}
