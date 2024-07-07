import React from "react";
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";

const ColorPickerComp = ({
  color,
  setColor,
  setSelectedColor,
  setColorPickerOpen,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md w-[20rem] md:w-[35rem]">
        <ColorPicker
          color={color}
          onChange={setColor}
          hideInput={["rgb", "hsv", "hex"]} // 옵션 숨기기
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={() => {
              setSelectedColor(color.hex);
              setColorPickerOpen(false);
            }}
          >
            선택
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerComp;
