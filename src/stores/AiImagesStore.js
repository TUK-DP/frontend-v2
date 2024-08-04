import { create } from "zustand";

export const AiImagesStore = create((set) => ({
  //keywordId: { imageUrl }
  AiImages: {},

  setAiImages: (keywordId, imageUrl) => {
    set((state) => ({
      AiImages: {
        ...state.AiImages,
        [keywordId]: imageUrl,
      },
    }));
  },
}));
