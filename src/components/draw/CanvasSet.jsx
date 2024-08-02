import React, { useEffect, useRef } from "react";
import { useDrawEvents } from "../../hooks/canvas/useDrawEvents";
import { useDrawStateStore } from "../../stores/DrawState";

const CanvasSet = ({ canvasWidth, keyword, canvasRef }) => {
  return (
    <div className="w-full aspect-square bg-white">
      <DrawCanvas
        canvasWidth={canvasWidth}
        canvasRef={canvasRef}
        keyword={keyword}
      />
      {/* <BackgroundCanvas /> */}
    </div>
  );
};

export default CanvasSet;

const DrawCanvas = ({ canvasWidth, canvasRef, keyword }) => {
  const { startDrawing, endDrawing, draw } = useDrawEvents(
    canvasRef,
    keyword.keywordId
  );

  const { drawState } = useDrawStateStore();
  console.log(drawState);
  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
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
