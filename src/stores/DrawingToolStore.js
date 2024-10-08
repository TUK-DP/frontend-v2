import { create } from "zustand";

export const useDrawingToolStore = create((set) => ({
  drawingTools: {
    brushSize: 3,
    color: "#000000",
    drawingMode: true,
  },

  setDrawingTools: (drawingTools) => {
    set((state) => {
      const updatedDrawingTools = { ...state.drawingTools, ...drawingTools };
      return { drawingTools: updatedDrawingTools };
    });
  },
  initDrawingTools: () => {
    set((state) => {
      return {
        drawingTools: { brushSize: 3, color: "#000000", drawingMode: true },
      };
    });
  },
}));
