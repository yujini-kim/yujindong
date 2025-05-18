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
  isLoggedIn: boolean;
  roles: string[];
  setRoles: (roles: string[]) => void;
}

export const useAdminCheckStore = create<AdminCheckState>((set) => ({
  isLoggedIn: false,
  roles: [],
  setRoles: (roles) => set({ roles }),
}));
