import React, { useState } from "react";
import "../../styles/inputCustum.css";
import { useDrawingToolStore } from "../../stores/DrawingToolStore";

const BrushSizeControl = () => {
  const { drawingTools, setDrawingTools } = useDrawingToolStore(
    (state) => state
  );

  return (
    <div className="flex items-center mx-3">
      <input
        type="range"
        min="3"
        max="40"
        step={1}
        value={drawingTools.brushSize}
        onChange={(event) =>
          setDrawingTools({ brushSize: parseInt(event.target.value) })
        }
        className="mr-4 flex-1"
      />
      <BrushStateCircle
        selectedColor={drawingTools.color}
        circleSize={drawingTools.brushSize}
      />
    </div>
  );
};

export default BrushSizeControl;

const BrushStateCircle = ({ selectedColor, circleSize }) => {
  return (
    <div className="w-16 h-16 flex justify-center items-center">
      <div
        className={`rounded-full ${selectedColor === "transparent" ? "border-4" : ""}`}
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          backgroundColor: selectedColor,
        }}
      />
    </div>
  );
};
