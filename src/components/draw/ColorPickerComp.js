import React, { useState, useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import "../../styles/colorPicker.css";
import { pickerHeight, mdPickerHeight } from "../../constants/size";
import { useDrawingToolStore } from "../../stores/DrawingToolStore";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { IoClose } from "react-icons/io5";

const ColorPickerComp = ({ setColorPickerOpen }) => {
  const { drawingTools, setDrawingTools } = useDrawingToolStore();
  const [colorPickerHeight, setColorPickerHeight] = useState(pickerHeight);
  const [color, setColor] = useColor(drawingTools.color);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 768) {
        setColorPickerHeight(mdPickerHeight);
      } else {
        setColorPickerHeight(pickerHeight);
      }
    };

    updateHeight();
    disableBodyScroll(document.body);
    return () => {
      enableBodyScroll(document.body);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[20rem] md:w-[35rem]">
        <button
          className="text-[#6100C1] font-semibold w-full flex justify-end pr-2 md:pr-4 pt-2 md:pt-4"
          onClick={() => setColorPickerOpen(false)}
        >
          <IoClose className="text-lg md:text-4xl" />
        </button>
        <div className="pt-3 p-6">
          <div className="w-full font-bold text-xl md:text-3xl flex justify-center mb-3">
            원하는 색상을 선택하세요
          </div>
          <ColorPicker
            color={color}
            onChange={setColor}
            hideInput={["rgb", "hsv", "hex"]} // 옵션 숨기기
            height={colorPickerHeight}
          />
          <div className="flex items-center justify-between mt-6">
            <ColorState color={color} />
            <button
              className="bg-[#6100C1] hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 md:text-2xl"
              onClick={() => {
                setDrawingTools({ ...drawingTools, color: color.hex });
                setColorPickerOpen(false);
              }}
            >
              선택
            </button>
          </div>
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
        className="w-20 md:w-28 h-8 md:h-10 border rounded-md ml-2 md:ml-8"
        style={{ backgroundColor: color.hex }}
      ></div>
    </div>
  );
};
