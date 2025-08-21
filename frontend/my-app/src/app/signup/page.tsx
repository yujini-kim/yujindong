import AuthFormLayout from '@/featuers/auth/components/auth-layout'
import AuthSwitchLink from '@/featuers/auth/components/auth-switch-link'
import SignupForm from '@/featuers/auth/signup/components/sign-up-form'

export default function Signup() {
    return (
        <AuthFormLayout footer={<AuthSwitchLink text="이미 회원이신가요?" linkText="로그인" href="/login" />}>
            <SignupForm />
        </AuthFormLayout>
    )
}
