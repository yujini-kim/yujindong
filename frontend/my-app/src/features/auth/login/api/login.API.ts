import { BASE_URL } from '@/constants/constants'
import { LoginFormData } from '../model/login.schema'

export const postLoginAPI = async (formData: LoginFormData) => {
    const res = await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        cache: 'no-store',
    })

    if (!res.ok) {
        const errorData = await res.json().catch(() => null)
        const message = errorData?.message || `HTTP error! status: ${res.status}`
        throw new Error(message)
    }

    return res.json()
}
