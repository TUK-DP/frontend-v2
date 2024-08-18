import create from "zustand";

const useFontSizeStore = create((set) => ({
  fontSize: localStorage.getItem("fontSize") || "16px",
  setFontSize: (size) => {
    localStorage.setItem("fontSize", size);
    set({ fontSize: size });
  },
}));

export default useFontSizeStore;
