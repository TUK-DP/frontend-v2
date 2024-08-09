import create from "zustand";

const useFontSizeStore = create((set) => ({
  fontSize: "16px",
  setFontSize: (size) => set({ fontSize: size }),
}));

export default useFontSizeStore;
