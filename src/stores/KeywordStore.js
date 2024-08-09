import { create } from "zustand";

export const useKeywordStore = create((set) => ({
  selectedKeyword: { keyword: "", keywordId: 0, imgUrl: "" },
  index: 0,

  setIndex: (index) => {
    set((state) => ({
      index: index,
    }));
  },

  setSelectedKeyword: (keyword) => {
    set((state) => ({
      selectedKeyword: keyword,
    }));
  },

  resetSelectedKeyword: () => {
    set((state) => ({
      selectedKeyword: { keyword: "", keywordId: 0, imgUrl: "" },
      index: 0,
    }));
  },
}));
