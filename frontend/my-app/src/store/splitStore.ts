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

interface TextState {
  textLines: string[];
  setTextLines: (text: string) => void;
}

export const useTextStore = create<TextState>((set) => ({
  textLines: [],
  setTextLines: (text: string) =>
    set({
      textLines: text.split("\r\n"),
    }),
}));
