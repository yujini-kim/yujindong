import { ReactNode } from 'react'

export default function FormErrorMessage({ children }: { children: ReactNode }) {
    return <p className="text-xs text-redx-500">{children}</p>
}
