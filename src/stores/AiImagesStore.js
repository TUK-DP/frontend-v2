import { create } from "zustand";

export const useAiImageStore = create((set) => ({
  //keywordId: { imageUrl }
  AiImages: {},

  setAiImages: (keywordId, imageUrl) => {
    set((state) => ({
      AiImages: {
        ...state.AiImages,
        [keywordId]: { imageUrl },
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
