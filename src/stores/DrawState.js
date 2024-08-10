import { create } from "zustand";

export const useDrawStateStore = create((set) => ({
  // { keyword: { canvasState: 현재상태, history: [현재상태를 제외한 상태들], redoList: [되돌리기 상태] }}
  drawState: {},

  // 캔버스 상태 저장
  setDrawState: (keyword, canvasRef) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const currentState = ctx.getImageData(0, 0, canvas.width, canvas.height);

    set((state) => {
      // 이전 상태
      const currentKeywordState = state.drawState[keyword] || {
        canvasState: ctx.getImageData(0, 0, canvas.width, canvas.height),
        history: [],
        redoList: [],
      };

      // 새로운 상태
      return {
        drawState: {
          ...state.drawState,
          [keyword]: {
            canvasState: currentState,
            history: [
              ...currentKeywordState.history,
              currentKeywordState.canvasState,
            ],
            redoList: [],
          },
        },
      };
    });
  },

  // 뒤로 되돌리기
  undo: (keyword, canvasRef) => {
    set((state) => {
      const currentKeywordState = state.drawState[keyword];

      if (!currentKeywordState || currentKeywordState.history.length === 0)
        return state;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (currentKeywordState.history.length === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return {
          drawState: {
            ...state.drawState,
            [keyword]: {
              ...currentKeywordState,
              canvasState: ctx.getImageData(0, 0, canvas.width, canvas.height),
              history: [],
              redoList: [
                currentKeywordState.canvasState,
                ...currentKeywordState.redoList,
              ],
            },
          },
        };
      }
      const lastHistory =
        currentKeywordState.history[currentKeywordState.history.length - 1];
      const newRedoList = [
        currentKeywordState.canvasState,
        ...currentKeywordState.redoList,
      ];

      // 이전 상태 그리기
      ctx.putImageData(lastHistory, 0, 0);

      return {
        drawState: {
          ...state.drawState,
          [keyword]: {
            ...currentKeywordState,
            canvasState: lastHistory,
            history: currentKeywordState.history.slice(0, -1),
            redoList: newRedoList,
          },
        },
      };
    });
  },

  // 앞으로 되돌리기
  redo: (keyword, canvasRef) => {
    set((state) => {
      const currentKeywordState = state.drawState[keyword];

      if (!currentKeywordState || currentKeywordState.redoList.length === 0)
        return state;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const redoState = currentKeywordState.redoList[0];
      const newHistory = [
        currentKeywordState.canvasState,
        ...currentKeywordState.history,
      ];

      // redo 상태를 그리기
      ctx.putImageData(redoState, 0, 0);

      return {
        drawState: {
          ...state.drawState,
          [keyword]: {
            ...currentKeywordState,
            canvasState: redoState,
            history: newHistory,
            redoList: currentKeywordState.redoList.slice(1),
          },
        },
      };
    });
  },

  resetCanvasState: () => {
    set({ drawState: {} });
  },
}));
