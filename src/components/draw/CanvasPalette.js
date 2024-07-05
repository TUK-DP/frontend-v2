import React, { useState } from "react";
import DrawingToolBar from "./DrawingToolBar";

const CanvasPalette = () => {
  const [circleSize, setCircleSize] = useState(20); // 초기 원의 크기 설정

  // range input 값이 변경될 때 호출되는 함수
  const handleRangeChange = (event) => {
    setCircleSize(parseInt(event.target.value));
  };

  return (
    <div className="fixed bottom-[-7rem]">
      <div className="flex items-center mx-3">
        <input
          type="range"
          min="20"
          max="50"
          value={circleSize}
          onChange={handleRangeChange}
          className="mr-4 flex-1"
        />
        <div className="w-16 h-16 flex justify-center items-center">
          <div
            className="bg-red-500 rounded-full"
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
            }}
          />
        </div>
      </div>
      <DrawingToolBar />
    </div>
  );
};

export default CanvasPalette;
