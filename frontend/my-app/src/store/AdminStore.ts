import { create } from "zustand";

interface AdminState {
  currentPage: number;

  setCurrentPage: (page: number) => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
