import { create } from "zustand";

export const useAiImageStore = create((set) => ({
  //keywordId: { imageUrl, opacity }
  AiImages: {},

  setAiImages: (keywordId, imageUrl, opacity = 1) => {
    set((state) => ({
      AiImages: {
        ...state.AiImages,
        [keywordId]: { imageUrl, opacity },
      },
    }));
  },
  resetAiImages: () => {
    set((state) => ({
      AiImages: {},
    }));
  },
  removeAiImage: (keywordId) => {
    set((state) => {
      const { [keywordId]: _, ...remainingAiImages } = state.AiImages;
      return {
        AiImages: remainingAiImages,
      };
    });
  },
}));
