import create from "zustand";

export const useKeywordStore = create((set) => ({
  keywords: ["강아지", "고양이", "쿼카"],

  setKeywords: (newKeywords) => set({ keywords: newKeywords }),
}));
