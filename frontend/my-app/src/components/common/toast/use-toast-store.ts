'use client'

import { create } from 'zustand'

export type ToastType = 'success' | 'error'

interface ToastProps {
    type: ToastType
    message: string
}

interface ToastState {
    toast: ToastProps | null
    setToast: (type: ToastType, message: string) => void
    clearToast: () => void
}

export const useToastStore = create<ToastState>((set) => ({
    toast: null,
    setToast: (type, message) => set({ toast: { type, message } }),
    clearToast: () => set({ toast: null }),
}))
