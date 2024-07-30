import React, { useEffect, useRef } from "react";
import { useDrawEvents } from "../../hooks/canvas/useDrawEvents";
import { useDrawingToolStore } from "../../stores/DrawingToolStore";

const CanvasSet = ({ canvasWidth }) => {
  const canvasRef = useRef(null);

  return (
    <div className="w-full aspect-square bg-white">
      <DrawCanvas canvasWidth={canvasWidth} canvasRef={canvasRef} />
      {/* <BackgroundCanvas ref={canvasBgRef}/> */}
    </div>
  );
};

export default CanvasSet;

const DrawCanvas = ({ canvasWidth, canvasRef }) => {
  const { startDrawing, endDrawing, draw } = useDrawEvents(canvasRef);

  useEffect(() => {
    console.log("CanvasRef:", canvasRef.current);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      console.log("Canvas Context:", ctx);
    }
  }, [canvasRef]);

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
