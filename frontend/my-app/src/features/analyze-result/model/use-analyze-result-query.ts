import { useQuery } from '@tanstack/react-query'
import { getAnaylzeResult } from '../api/anaylze-result.API'

export const useAnalyzeResultQuery = (uuid: string) => {
    const analyzeResultQuery = useQuery({
        queryFn: () => getAnaylzeResult(uuid),
        queryKey: [`result-${uuid}`],
        enabled: !!uuid,
    })

    return analyzeResultQuery
}
