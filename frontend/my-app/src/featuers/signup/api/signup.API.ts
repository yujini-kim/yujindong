import { BASE_URL } from '@/constats/constants'
import { SignupFormData } from '../model/signup.types'

export const postSignupAPI = async (formData: SignupFormData) => {
    const res = await fetch(`${BASE_URL}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    })
    const data = await res.json()
    return data
}
