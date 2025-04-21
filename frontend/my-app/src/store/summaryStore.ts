import { create } from "zustand";

interface SummaryState {
  summary: string | null;
  realsummary: string[];
  setSummary: (text: string) => void;
}

export const useSummaryStore = create<SummaryState>((set) => ({
  summary: null,
  realsummary: [],
  setSummary: (text: string) =>
    set({
      summary: text,
      realsummary: text
        .split("\n")
        .filter((line) => line.startsWith("-"))
        .map((line) => line.slice(1).trim()),
    }),
}));
