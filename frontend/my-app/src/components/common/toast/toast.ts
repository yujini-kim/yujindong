'use client'

import { useToastStore } from './use-toast-store'

export const toast = {
    success: (message: string) => {
        if (typeof window !== 'undefined') {
            useToastStore.getState().setToast('success', message)
        }
    },
    error: (message: string) => {
        if (typeof window !== 'undefined') {
            useToastStore.getState().setToast('error', message)
        }
    },
}
