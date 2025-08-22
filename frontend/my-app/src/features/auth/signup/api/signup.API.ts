import { BASE_URL } from '@/constants/constants'
import { SignupFormData } from '../model/signup.schema'

export const postSignupAPI = async (formData: SignupFormData) => {
    const res = await fetch(`${BASE_URL}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
    })

    if (!res.ok) {
        const errorData = await res.json().catch(() => null)
        const message = errorData?.message || `HTTP error! status: ${res.status}`
        throw new Error(message)
    }

    return res.json()
}
