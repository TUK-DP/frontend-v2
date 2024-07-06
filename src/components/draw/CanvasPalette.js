import React, { useState, useRef, useEffect } from "react";
import BrushSizeControl from "./BrushSizeControl";
import DrawingToolBar from "./DrawingToolBar";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import ColorPickerComp from "./ColorPickerComp";
import { useColor } from "react-color-palette";
import "react-color-palette/css";

const CanvasPalette = () => {
  const [selectedColor, setSelectedColor] = useState("transparent"); //초기 색상 설정
  const [isOpen, setIsOpen] = useState(true);
  const paletteRef = useRef(null);
  const [paletteHeight, setPaletteHeight] = useState(0); //팔레트의 높이
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [color, setColor] = useColor("hex", "#FF0900");

  useEffect(() => {
    if (paletteRef.current) {
      setPaletteHeight(paletteRef.current.clientHeight);
    }
  }, [paletteRef.current]);

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
          <DrawingToolBar
            setSelectedColor={setSelectedColor}
            setColorPickerOpen={setColorPickerOpen}
            setColor={setColor}
          />
        </div>
      </div>
      {colorPickerOpen && (
        <ColorPickerComp
          color={color}
          setColor={setColor}
          setSelectedColor={setSelectedColor}
          setColorPickerOpen={setColorPickerOpen}
        />
      )}
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
