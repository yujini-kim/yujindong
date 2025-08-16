'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ToastContent from './toast-content'
import { useToastStore } from './use-toast-store'

export default function ToastContainer() {
    if (typeof window === 'undefined') return null
    const toast = useToastStore((s) => s.toast)
    const clearToast = useToastStore((s) => s.clearToast)

    useEffect(() => {
        if (!toast) return
        const timer = setTimeout(() => clearToast(), 3000)
        return () => clearTimeout(timer)
    }, [toast, clearToast])

    if (!toast) return null

    const element = document.querySelector('#portal')
    if (!element) return null

    return createPortal(
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10 space-y-1 opacity-80">
            <ToastContent type={toast.type} message={toast.message} />
        </div>,
        element,
    )
}
