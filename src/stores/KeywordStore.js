import { create } from "zustand";

export const useKeywordStore = create((set) => ({
  //{keyword, keywordId, imgUrl}
  selectedKeyword: "",

  setSelectedKeyword: (keyword) => {
    set((state) => ({
      selectedKeyword: keyword,
    }));
  },
}));
