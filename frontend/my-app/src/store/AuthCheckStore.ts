import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (state) => set({ isLoggedIn: state }),
}));

interface AdminCheckState {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

export const useAdminCheckStore = create<AdminCheckState>((set) => ({
  isAdmin: false,
  setIsAdmin: (value) => set({ isAdmin: value }),
}));
