import React from "react";
import { useDrawEvents } from "../../hooks/canvas/useDrawEvents";

const CanvasSet = ({ canvasWidth, keyword, canvasRef, canvasBgRef }) => {
  return (
    <div className="w-full aspect-square bg-white relative">
      <DrawCanvas
        canvasWidth={canvasWidth}
        canvasRef={canvasRef}
        keyword={keyword}
      />
      <BackgroundCanvas canvasWidth={canvasWidth} canvasBgRef={canvasBgRef} />
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

const BackgroundCanvas = ({ canvasWidth, canvasBgRef }) => {
  return (
    <canvas
      ref={canvasBgRef}
      width={canvasWidth}
      height={canvasWidth}
      className={
        "absolute top-0 left-0 box-content bg-cover -z-10 bg-no-repeat"
      }
    ></canvas>
  );
};
