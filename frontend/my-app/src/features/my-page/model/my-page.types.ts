export interface MyPageDataType {
    createdAt: string
    friend_name: string
    index: number
    recommendation: string
    score: number
    summary: string
    text: string
}

export interface MyPageType {
    currentPage: number
    items: MyPageDataType[]
    pageSize: number
    totalPages: number
}
