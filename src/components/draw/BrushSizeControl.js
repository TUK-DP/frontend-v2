import React, { useState } from "react";
import "../../styles/inputCustum.css";

const BrushSizeControl = ({ selectedColor }) => {
  const [circleSize, setCircleSize] = useState(20); // 초기 원의 크기 설정

  return (
    <div className="flex items-center mx-3">
      <input
        type="range"
        min="10"
        max="40"
        step={1}
        value={circleSize}
        onChange={(event) => setCircleSize(parseInt(event.target.value))}
        className="mr-4 flex-1"
      />
      <BrushStateCircle selectedColor={selectedColor} circleSize={circleSize} />
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
