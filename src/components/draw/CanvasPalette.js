import React, { useState, useEffect } from "react";
import BrushSizeControl from "./BrushSizeControl";
import DrawingToolBar from "./DrawingToolBar";
import ColorPickerComp from "./ColorPickerComp";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { useDrawingToolStore } from "../../stores/DrawingToolStore";

const CanvasPalette = () => {
  const PALETTE_HEIGHT = 330;
  const [isOpen, setIsOpen] = useState(true);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-0 transition-transform duration-500 bg-white rounded-t-2xl"
        style={{
          transform: isOpen
            ? `translateY(9rem)`
            : `translateY(${PALETTE_HEIGHT}px)`,
        }}
      >
        <PaletteToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        <div>
          <BrushSizeControl />
          <DrawingToolBar setColorPickerOpen={setColorPickerOpen} />
        </div>
      </div>
      {colorPickerOpen && (
        <ColorPickerComp setColorPickerOpen={setColorPickerOpen} />
      )}
    </>
  );
};

export default CanvasPalette;

const PaletteToggle = ({ isOpen, setIsOpen }) => {
  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div
      onClick={toggleOpen}
      className="bg-[#d9d9d9] flex justify-center items-center py-2 rounded-ss-2xl rounded-se-2xl cursor-pointer"
    >
      {isOpen ? <TbTriangleInvertedFilled /> : <TbTriangleFilled />}
    </div>
  );
};
