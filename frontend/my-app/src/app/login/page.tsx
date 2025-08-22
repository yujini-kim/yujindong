import AuthFormLayout from '@/featuers/auth/components/auth-layout'
import AuthSwitchLink from '@/featuers/auth/components/auth-switch-link'
import LoginForm from '@/featuers/auth/login/components/login-form'

export default function Login() {
    return (
        <AuthFormLayout footer={<AuthSwitchLink text="회원이 아니신가요?" linkText="회원가입" href="/signup" />}>
            <LoginForm />
        </AuthFormLayout>
    )
}
