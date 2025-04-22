import { create } from "zustand";

interface MypageState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  selectedIdx: number | null;
  setSelectedIdx: (idx: number | null) => void;
  isClick: boolean;
  toggleClick: () => void;
}

export const useMypageStore = create<MypageState>((set) => ({
  currentPage: 0,
  setCurrentPage: (page) => set({ currentPage: page }),
  selectedIdx: null,
  setSelectedIdx: (idx) => set({ selectedIdx: idx }),
  isClick: false,
  toggleClick: () => set((state) => ({ isClick: !state.isClick })),
}));
