import { BASE_URL } from '@/constants/constants'
import { SignupFormData } from '../model/signup.schema'

export const postSignupAPI = async (formData: SignupFormData) => {
    const res = await fetch(`${BASE_URL}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    if (!res.ok) {
        throw new Error((data && (data.message || data.error)) || '회원가입 실패')
    }
    return data
}
