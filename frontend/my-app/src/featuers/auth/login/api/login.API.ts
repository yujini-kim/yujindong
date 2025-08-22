import { BASE_URL } from '@/constants/constants'
import { LoginFormData } from '../model/login.schema'

export const postLoginAPI = async (formData: LoginFormData) => {
    const res = await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()

    return data
}
