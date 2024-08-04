import { create } from "zustand";

export const useKeywordStore = create((set) => ({
  selectedKeyword: { keyword: "", keywordId: 0, imgUrl: "" },

  setSelectedKeyword: (keyword) => {
    set((state) => ({
      selectedKeyword: keyword,
    }));
  },
}));
