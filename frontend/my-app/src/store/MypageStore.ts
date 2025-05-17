import { create } from "zustand";

interface MyPageState {
  currentPage: number;
  selectedTab: "summary" | "chat";
  selectedIdx: number | null;
  setCurrentPage: (page: number) => void;
  setSelectedTab: (tab: "summary" | "chat") => void;
  setSelectedIdx: (idx: number | null) => void;
}

export const useMyPageStore = create<MyPageState>((set) => ({
  currentPage: 1,
  selectedTab: "summary",
  selectedIdx: null,
  setCurrentPage: (page) => set({ currentPage: page }),
  setSelectedTab: (tab) => set({ selectedTab: tab }),
  setSelectedIdx: (idx) => set({ selectedIdx: idx }),
}));
