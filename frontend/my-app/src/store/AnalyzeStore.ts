import { create } from "zustand";

interface AnalyzeState {
  text: string;
  friend_name: string;
  isPending: boolean;
  setText: (text: string) => void;
  setFriendName: (name: string) => void;
  setIsPending: (flag: boolean) => void;
}

export const useAnalyzeStore = create<AnalyzeState>((set) => ({
  text: "",
  friend_name: "",
  isPending: false,
  setText: (text) => set({ text }),
  setFriendName: (name) => set({ friend_name: name }),
  setIsPending: (flag) => set({ isPending: flag }),
}));
