'use client'

import ToastContainer from '@/components/common/toast/toast-container'
import { checkAuth } from '@/features/auth/model/auth-check'
import { lightTheme } from '@/styles/theme'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: { children: ReactNode }) {
    useEffect(() => {
        checkAuth()
    }, [])

    const [queryClient] = useState(() => new QueryClient())

    return (
        <GoogleOAuthProvider clientId="1036900568540-f9ljgdnvj5n2c317j0hm8jdo3t345m5j.apps.googleusercontent.com">
            <ThemeProvider theme={lightTheme}>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <ToastContainer />
                </QueryClientProvider>
            </ThemeProvider>
        </GoogleOAuthProvider>
    )
}
