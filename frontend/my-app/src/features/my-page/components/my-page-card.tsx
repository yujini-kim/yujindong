'use client'

import { useMyPageQuery } from '../model/use-my-page-query'

export default function Card() {
    const { data } = useMyPageQuery()
    console.log(data)
    return <div></div>
}
