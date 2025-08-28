import { useQuery } from '@tanstack/react-query'
import { getAnalyzeResult } from '../api/analyze-result.API'

export const useAnalyzeResultQuery = (uuid: string) => {
    const analyzeResultQuery = useQuery({
        queryFn: () => getAnalyzeResult(uuid),
        queryKey: [`result-${uuid}`],
        enabled: !!uuid,
    })

    return analyzeResultQuery
}
