import React, { useState } from "react";
import eraser from "../../assets/drawingTools/eraser.png";
import blackPencil from "../../assets/drawingTools/colorPencil_black.png";
import redPencil from "../../assets/drawingTools/colorPencil_red.png";
import orangePencil from "../../assets/drawingTools/colorPencil_orange.png";
import coralPencil from "../../assets/drawingTools/colorPencil_coral.png";
import yellowPencil from "../../assets/drawingTools/colorPencil_yellow.png";
import greenPencil from "../../assets/drawingTools/colorPencil_green.png";
import olivePencil from "../../assets/drawingTools/colorPencil_olive.png";
import bluePencil from "../../assets/drawingTools/colorPencil_blue.png";
import navyPencil from "../../assets/drawingTools/colorPencil_navy.png";
import purplePencil from "../../assets/drawingTools/colorPencil_purple.png";
import plumPencil from "../../assets/drawingTools/colorPencil_plum.png";
import pinkPencil from "../../assets/drawingTools/colorPencil_pink.png";
import babypinkPencil from "../../assets/drawingTools/colorPencil_babypink.png";
import apricotPencil from "../../assets/drawingTools/colorPencil_apricot.png";
import brownPencil from "../../assets/drawingTools/colorPencil_brown.png";
import grayPencil from "../../assets/drawingTools/colorPencil_gray.png";
import rainbowPencil from "../../assets/drawingTools/colorPencil_rainbow.png";

const DrawingToolBar = ({ setSelectedColor, setColorPickerOpen }) => {
  const [selectedTool, setSelectedTool] = useState(1);

  const TOOL_LIST = [
    { id: "eraser", tool: eraser, color: "transparent" },
    { id: "black", tool: blackPencil, color: "#000000" },
    { id: "red", tool: redPencil, color: "#FF0900" },
    { id: "orange", tool: orangePencil, color: "#FF7700" },
    { id: "coral", tool: coralPencil, color: "#FF9B8A" },
    { id: "yellow", tool: yellowPencil, color: "#FFF200" },
    { id: "green", tool: greenPencil, color: "#88FF00" },
    { id: "olive", tool: olivePencil, color: "#007A08" },
    { id: "blue", tool: bluePencil, color: "#0051FF" },
    { id: "navy", tool: navyPencil, color: "#0C00AD" },
    { id: "purple", tool: purplePencil, color: "#9000FF" },
    { id: "plum", tool: plumPencil, color: "#78007A" },
    { id: "pink", tool: pinkPencil, color: "#FF00EA" },
    { id: "babypink", tool: babypinkPencil, color: "#FFA6E6" },
    { id: "apricot", tool: apricotPencil, color: "#FFE4CF" },
    { id: "brown", tool: brownPencil, color: "#854A19" },
    { id: "gray", tool: grayPencil, color: "#919191" },
    {
      id: "rainbow",
      tool: rainbowPencil,
    },
  ];

  // rainbowPencil 클릭 시 컬러피커 표시
  const handleToolSelect = (index) => {
    setSelectedTool(index);
    if (index === TOOL_LIST.length - 1) {
      setColorPickerOpen(true);
    } else {
      setSelectedColor(TOOL_LIST[index].color);
      setColorPickerOpen(false);
    }
  };

  return (
    <div className="flex overflow-x-scroll scrollbar-hide pt-10">
      {TOOL_LIST.map((tool, index) => (
        <img
          key={index}
          src={tool.tool}
          className={`transition-transform duration-500 ${
            selectedTool === index ? "-translate-y-10" : ""
          }`}
          style={{ width: "60px", margin: "5px", cursor: "pointer" }}
          onClick={() => handleToolSelect(index)}
        />
      ))}
    </div>
  );
};

export default DrawingToolBar;
