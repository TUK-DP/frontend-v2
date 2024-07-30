import { create } from "zustand";

export const useDrawStateStore = create((set) => ({
  drawStates: [],
  history: [],
  redoList: [],
  // drawState 저장
  setDrawState: (canvasRef) => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    const currentState = ctx.getImageData(0, 0, canvas.width, canvas.height);

    set((state) => {
      console.log(state.drawStates);
      return {
        drawStates: [...state.drawStates, currentState],
        redoList: [], // 상태가 변경되면 리두 리스트를 비워줍니다.
      };
    });
  },
  // 뒤로 되돌리기
  undo: (context, canvasRef) => {
    set((state) => {
      if (state.history.length > 0) {
        const previousState = state.history[state.history.length - 1];
        const newRedoList = [state.drawStates, ...state.redoList];

        context.putImageData(previousState, 0, 0);

        return {
          drawStates: previousState,
          history: state.history.slice(0, -1),
          redoList: newRedoList,
        };
      }
      return state;
    });
  },
  // 앞으로 되돌리기
  redo: (context, canvasRef) => {
    set((state) => {
      if (state.redoList.length > 0) {
        const nextState = state.redoList[0];
        const newHistory = [state.drawStates, ...state.history];

        context.putImageData(nextState, 0, 0);

        return {
          drawStates: nextState,
          history: newHistory,
          redoList: state.redoList.slice(1),
        };
      }
      return state;
    });
  },
}));
