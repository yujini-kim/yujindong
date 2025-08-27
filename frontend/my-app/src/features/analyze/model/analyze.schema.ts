import { z } from 'zod'

export const analyzeSchema = z.object({
    text: z.string().trim().min(1, { message: '대화내용을 입력해주세요' }),
    friend_name: z.string().trim().min(2, { message: '이름은 최소 2자 이상 입력해주세요' }),
})

export type AnalyzeFormData = z.infer<typeof analyzeSchema>
