import { BASE_URL } from '@/constants/constants'
import { analyzeResultType } from '../model/analyze-result.types'

export const getAnaylzeResult = async (uuid: string): Promise<analyzeResultType> => {
    const res = await fetch(`${BASE_URL}/api/result/${uuid}`)
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data
}
