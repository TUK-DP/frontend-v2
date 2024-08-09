import React from "react";
import { useDrawEvents } from "../../hooks/canvas/useDrawEvents";
import useInitializeCanvas from "../../hooks/canvas/useInitializeCanvas";

const CanvasSet = ({ canvasWidth, keyword, canvasRef, canvasBgRef }) => {
  return (
    <div className="w-full aspect-square  relative">
      <DrawCanvas
        canvasWidth={canvasWidth}
        canvasRef={canvasRef}
        keyword={keyword}
      />
      <BackgroundCanvas
        canvasWidth={canvasWidth}
        canvasBgRef={canvasBgRef}
        keyword={keyword}
      />
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
      className={"absolute top-0 left-0 touch-none z-10"}
    />
  );
};

const BackgroundCanvas = ({ canvasWidth, canvasBgRef, keyword }) => {
  useInitializeCanvas({ canvasBgRef, keyword });
  return (
    <canvas
      ref={canvasBgRef}
      width={canvasWidth}
      height={canvasWidth}
      className={
        "absolute top-0 left-0 box-content bg-cover bg-no-repeat -z-10"
      }
    ></canvas>
  );
};
