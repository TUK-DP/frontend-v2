import React, { useState } from "react";
import DrawingToolBar from "./DrawingToolBar";

const CanvasPalette = () => {
  const [selectedColor, setSelectedColor] = useState("transparent"); // 초기 색상 설정

  return (
    <div className="fixed bottom-[-7rem]">
      <BrushSizeControl
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <DrawingToolBar setSelectedColor={setSelectedColor} />
    </div>
  );
};

export default CanvasPalette;

const BrushSizeControl = ({ selectedColor }) => {
  const [circleSize, setCircleSize] = useState(20); // 초기 원의 크기 설정
  return (
    <div className="flex items-center mx-3">
      <input
        type="range"
        min="20"
        max="50"
        value={circleSize}
        onChange={(event) => setCircleSize(parseInt(event.target.value))}
        className="mr-4 flex-1"
      />
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
    </div>
  );
};
