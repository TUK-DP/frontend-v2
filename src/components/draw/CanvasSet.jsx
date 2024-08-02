import React from "react";
import { useDrawEvents } from "../../hooks/canvas/useDrawEvents";

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
