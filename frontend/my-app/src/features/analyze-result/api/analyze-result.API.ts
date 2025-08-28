import { BASE_URL } from '@/constants/constants'
import { AnalyzeResult } from '../model/analyze-result.types'

export const getAnalyzeResult = async (uuid: string): Promise<AnalyzeResult> => {
    const res = await fetch(`${BASE_URL}/api/result/${uuid}`)
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data
}
