import { create } from "zustand";

export const useDrawingToolStore = create((set) => ({
  drawingTools: {
    brushSize: 3,
    color: "#000000",
    drawingMode: false,
  },

  setDrawingTools: (drawingTools) => {
    set((state) => {
      const updatedDrawingTools = { ...state.drawingTools, ...drawingTools };
      console.log("Previous state:", state.drawingTools);
      console.log("Updated state:", updatedDrawingTools);
      return { drawingTools: updatedDrawingTools };
    });
  },
}));
