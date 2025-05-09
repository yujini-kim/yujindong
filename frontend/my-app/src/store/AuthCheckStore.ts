import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (state) => set({ isLoggedIn: state }),
}));
