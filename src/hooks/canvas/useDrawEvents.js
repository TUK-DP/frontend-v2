import { useEffect, useState } from "react";
import { useDrawStateStore } from "../../stores/DrawState";
import { useDrawingToolStore } from "../../stores/DrawingToolStore";

export const useDrawEvents = (canvasRef, keyword) => {
  const { setDrawState } = useDrawStateStore();
  const { drawingTools } = useDrawingToolStore();

  const { brushSize, color, drawingMode } = drawingTools;

  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  //초기 설정
  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
    }
  }, [canvasRef]);

  // 색과 두께 변경 시 마다 호출
  useEffect(() => {
    if (context) {
      context.lineWidth = brushSize;
      context.strokeStyle = color;
    }
  }, [brushSize, color]);

  // 그리기 시작
  const startDrawing = (event) => {
    setIsDrawing(true);
    draw(event);
  };

  // 그리기 종료
  const endDrawing = () => {
    if (!context) return;
    setIsDrawing(false);
    context?.beginPath();
    setDrawState(keyword, canvasRef);
  };

  // 실제 그리기 함수
  const draw = (event) => {
    if (!context || !isDrawing) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    if (event.touches) {
      const touch = event.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    }

    if (drawingMode) {
      context.lineWidth = brushSize;
      context.lineCap = "round";
      context.strokeStyle = color;

      context.lineTo(x, y);
      context.stroke();
      context.beginPath();
      context.moveTo(x, y);
    } else {
      // 지우기 모드
      context.clearRect(
        x - brushSize / 2,
        y - brushSize / 2,
        brushSize,
        brushSize
      );
    }
  };

  return { startDrawing, endDrawing, draw };
};
