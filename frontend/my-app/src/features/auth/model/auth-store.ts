import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
    username: string
    isAdmin: boolean
}

interface AuthState {
    user: User | null
    setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
        }),
        { name: 'auth-storage' },
    ),
)
