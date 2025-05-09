import { create } from "zustand";

type TabType = "summary" | "chat";

interface ResultTabStore {
  selectedTab: TabType;
  setSelectedTab: (tab: TabType) => void;
}

export const useResultTabStore = create<ResultTabStore>((set) => ({
  selectedTab: "summary",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
}));
