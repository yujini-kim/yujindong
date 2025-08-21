import { BASE_URL } from '@/constats/constants'
import { SignupFormData } from '../model/signup.schma'

export const postSignupAPI = async (formData: SignupFormData) => {
    const res = await fetch(`${BASE_URL}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    return data
}
