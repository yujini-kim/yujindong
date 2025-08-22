import AuthFormLayout from '@/features/auth/components/auth-layout'
import AuthSwitchLink from '@/features/auth/components/auth-switch-link'
import SignupForm from '@/features/auth/signup/components/sign-up-form'

export default function Signup() {
    return (
        <AuthFormLayout footer={<AuthSwitchLink text="이미 회원이신가요?" linkText="로그인" href="/login" />}>
            <SignupForm />
        </AuthFormLayout>
    )
}
