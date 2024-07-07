import React, { useState } from "react";

const BrushSizeControl = ({ selectedColor }) => {
  const [circleSize, setCircleSize] = useState(20); // 초기 원의 크기 설정

  return (
    <div className="flex items-center mx-3">
      <CustumInputRange
        value={circleSize}
        onChange={(event) => setCircleSize(parseInt(event.target.value))}
      />
      <BrushStateCircle selectedColor={selectedColor} circleSize={circleSize} />
    </div>
  );
};

export default BrushSizeControl;

const CustumInputRange = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min="20"
      max="50"
      value={value}
      onChange={onChange}
      className="mr-4 flex-1 appearance-none w-full h-2 rounded-full bg-indigo-400 outline-none cursor-pointer"
    />
  );
};

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
