import { BASE_URL } from '@/constants/constants'
import { SignupFormData } from '../model/signup.schema'

export const postSignupAPI = async (formData: SignupFormData) => {
    const res = await fetch(`${BASE_URL}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()

    return data
}
