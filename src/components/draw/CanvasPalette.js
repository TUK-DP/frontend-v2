import React, { useState, useRef, useEffect } from "react";
import DrawingToolBar from "./DrawingToolBar";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

const CanvasPalette = () => {
  const [selectedColor, setSelectedColor] = useState("transparent"); // 초기 색상 설정
  const paletteRef = useRef(null); // useRef로 팔레트의 DOM 요소를 저장할 변수 생성
  const [isOpen, setIsOpen] = useState(true);
  const [paletteHeight, setPaletteHeight] = useState(0); // 팔레트의 높이를 상태로 관리

  // useEffect를 이용하여 팔레트의 높이를 측정하고 상태에 저장
  useEffect(() => {
    if (paletteRef.current) {
      setPaletteHeight(paletteRef.current.clientHeight);
    }
  }, [paletteRef.current]); // 팔레트 ref가 변경될 때마다 실행

  const togglePalette = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="fixed bottom-0 right-0">
      <div
        className="transition-transform duration-500"
        style={{
          transform: isOpen
            ? `translateY(9rem)`
            : `translateY(${paletteHeight}px)`,
        }}
      >
        <PaletteToggle isOpen={isOpen} togglePalette={togglePalette} />
        <div ref={paletteRef} className={`palette ${isOpen ? "open" : ""}`}>
          <BrushSizeControl selectedColor={selectedColor} />
          <DrawingToolBar setSelectedColor={setSelectedColor} />
        </div>
      </div>
    </div>
  );
};

export default CanvasPalette;

const PaletteToggle = ({ isOpen, togglePalette }) => {
  return (
    <div
      onClick={togglePalette}
      className="bg-[#d9d9d9] flex justify-center items-center py-2 rounded-ss-2xl rounded-se-2xl cursor-pointer"
    >
      {isOpen ? <TbTriangleInvertedFilled /> : <TbTriangleFilled />}
    </div>
  );
};

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
