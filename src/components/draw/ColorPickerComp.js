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
      <div className="bg-white p-6 rounded-lg shadow-lg w-[20rem] md:w-[35rem]">
        <div className="w-full font-bold text-xl md:text-3xl flex justify-center mb-3">
          원하는 색상을 선택하세요
        </div>
        <ColorPicker
          color={color}
          onChange={setColor}
          hideInput={["rgb", "hsv", "hex"]} // 옵션 숨기기
        />
        <div className="flex items-center justify-between mt-6">
          <ColorState color={color} />
          <button
            className="bg-[#6100C1] hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300"
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

const ColorState = ({ color }) => {
  return (
    <div className="flex items-center">
      <strong className="md:text-2xl">선택한 색상:</strong>
      <div
        className="w-20 md:w-28 h-8 border rounded-md ml-2 md:ml-5 shadow-inner"
        style={{ backgroundColor: color.hex }}
      ></div>
    </div>
  );
};
