import { useQuery } from '@tanstack/react-query'
import { getMypageAPI } from '../api/my-page.API'

export const useMyPageQuery = (page = 0, size = 5) => {
    const myPageQuery = useQuery({
        queryFn: () => getMypageAPI(page, size),
        queryKey: ['my-page'],
    })
    return myPageQuery
}
