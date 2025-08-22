import { z } from 'zod'

export const loginSchema = z.object({
    username: z.string().trim().min(2, { message: '아이디는 최소 2자 이상입니다' }),
    password: z.string().min(6, { message: '비밀번호는 최소 6자 이상입니다' }),
})

export type LoginFormData = z.infer<typeof loginSchema>
