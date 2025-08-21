import { z } from 'zod'

export const signupSchema = z
    .object({
        displayName: z.string().trim().min(2, { message: '이름은 최소 2자 이상입니다' }),
        username: z.string().trim().min(2, { message: '아이디는 최소 2자 이상입니다' }),
        email: z.string().trim().email({ message: '이메일 형식으로 입력해주세요' }),
        password: z.string().min(6, { message: '비밀번호는 최소 6자 이상입니다' }),
        passwordConfirm: z.string().min(6, { message: '비밀번호는 최소 6자 이상입니다' }).optional(),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        path: ['passwordConfirm'],
        message: '비밀번호가 일치하지 않습니다',
    })

export type SignupFormData = z.infer<typeof signupSchema>
