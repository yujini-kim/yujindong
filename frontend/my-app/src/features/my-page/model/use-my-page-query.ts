import { useQuery } from '@tanstack/react-query'
import { getMypageAPI } from '../api/my-page.API'
import { MyPageType } from './my-page.types'

export const useMyPageQuery = (page: number) => {
    return useQuery<MyPageType, Error>({
        queryKey: ['myPage', page],
        queryFn: () => getMypageAPI(page),
    })
}
