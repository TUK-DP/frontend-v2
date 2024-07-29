import React from "react";

const CanvasSet = ({ canvasRef, canvasBgRef }) => {
  return (
    <div className="w-full aspect-square bg-white">
      <DrawCanvas ref={canvasRef} />
      {/* <BackgroundCanvas ref={canvasBgRef}/> */}
    </div>
  );
};

export default CanvasSet;

const DrawCanvas = React.forwardRef((props, ref) => {
  return <canvas ref={ref}></canvas>;
});

const BackgroundCanvas = () => {
  return <canvas></canvas>;
};
