import React, { useRef, useState, useEffect } from "react";
import { useDrawingToolStore } from "../../stores/DrawingToolStore";

const CanvasSet = ({ canvasRef, canvasBgRef, canvasWidth }) => {
  return (
    <div className="w-full aspect-square bg-white">
      <DrawCanvas canvasWidth={canvasWidth} />
      {/* <BackgroundCanvas ref={canvasBgRef}/> */}
    </div>
  );
};

export default CanvasSet;

const DrawCanvas = ({ canvasWidth }) => {
  const { drawingTools } = useDrawingToolStore();
  const { brushSize, color, drawingMode } = drawingTools;
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [redoList, setRedoList] = useState([]);

  // 초기 설정
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
  }, []);

  // 색과 두께 변경시 마다 호출
  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = color;
  }, [brushSize, color]);

  // 그리기 시작
  const startDrawing = (event) => {
    setIsDrawing(true);
    draw(event);
  };

  // 그리기 종료
  const endDrawing = () => {
    setIsDrawing(false);
    context?.beginPath();
    updateCanvasState();
    //redoList 초기화
    if (redoList.length > 0) {
      setRedoList([]);
    }
  };

  // 실제 그리기 함수
  const draw = (event) => {
    if (!context) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // 터치 이벤트
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // 터치 이벤트
    if (event.touches) {
      const touch = event.touches[0];
      const rect = canvas.getBoundingClientRect();
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    }

    // 지우기
    if (!drawingMode) {
      context.clearRect(
        x - brushSize / 2,
        y - brushSize / 2,
        brushSize,
        brushSize
      );
    }

    // 그리기
    if (drawingMode && isDrawing) {
      context.lineWidth = brushSize;
      context.lineCap = "round";
      context.strokeStyle = color;

      context.lineTo(x, y);
      context.stroke();
      context.beginPath();
      context.moveTo(x, y);
    }
  };

  // 캔버스 상태를 히스토리에 업데이트하는 함수
  const updateCanvasState = () => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    const currentState = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prevHistory) => [...prevHistory, currentState]);
  };

  // undo 기능
  const undo = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setRedoList((prevRedoHistory) => [
        context.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        ),
        ...prevRedoHistory,
      ]);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
      context.putImageData(previousState, 0, 0);
    }
  };

  // redo 기능
  const redo = () => {
    if (redoList.length > 0) {
      const nextState = redoList[0];
      setHistory((prevHistory) => [
        context.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        ),
        ...prevHistory,
      ]);
      setRedoList((prevRedoHistory) => prevRedoHistory.slice(1));
      context.putImageData(nextState, 0, 0);
    }
  };
  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      onMouseLeave={endDrawing}
      width={canvasWidth}
      height={canvasWidth}
      onTouchStart={startDrawing}
      onTouchEnd={endDrawing}
      onTouchMove={draw}
      className={"touch-none"}
    />
  );
};

const BackgroundCanvas = () => {
  return <canvas></canvas>;
};
