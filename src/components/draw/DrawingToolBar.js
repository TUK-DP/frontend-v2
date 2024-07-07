import React, { useState } from "react";
import eraser from "../../assets/drawingTools/eraser.png";
import redPencil from "../../assets/drawingTools/colorPencil_red.png";
import orangePencil from "../../assets/drawingTools/colorPencil_orange.png";
import yellowPencil from "../../assets/drawingTools/colorPencil_yellow.png";
import greenPencil from "../../assets/drawingTools/colorPencil_green.png";
import bluePencil from "../../assets/drawingTools/colorPencil_blue.png";
import navyPencil from "../../assets/drawingTools/colorPencil_navy.png";
import purplePencil from "../../assets/drawingTools/colorPencil_purple.png";
import pinkPencil from "../../assets/drawingTools/colorPencil_pink.png";
import rainbowPencil from "../../assets/drawingTools/colorPencil_rainbow.png";

const DrawingToolBar = ({ setSelectedColor, setColorPickerOpen }) => {
  const [selectedTool, setSelectedTool] = useState(1);

  const toolDatas = [
    { tool: eraser, color: "transparent" },
    { tool: redPencil, color: "#FF0900" },
    { tool: orangePencil, color: "#FF7700" },
    { tool: yellowPencil, color: "#FFF200" },
    { tool: greenPencil, color: "#88FF00" },
    { tool: bluePencil, color: "#0051FF" },
    { tool: navyPencil, color: "#0C00AD" },
    { tool: purplePencil, color: "#9000FF" },
    { tool: pinkPencil, color: "#FF00EA" },
    { tool: redPencil, color: "#FF0900" },
    { tool: orangePencil, color: "#FF7700" },
    { tool: yellowPencil, color: "#FFF200" },
    { tool: greenPencil, color: "#88FF00" },
    { tool: bluePencil, color: "#0051FF" },
    { tool: navyPencil, color: "#0C00AD" },
    { tool: purplePencil, color: "#9000FF" },
    { tool: pinkPencil, color: "#FF00EA" },
    {
      tool: rainbowPencil,
    },
  ];

  // rainbowPencil 클릭 시 컬러피커 표시
  const handleToolSelect = (index) => {
    setSelectedTool(index);
    if (index === toolDatas.length - 1) {
      setColorPickerOpen(true);
    } else {
      setSelectedColor(toolDatas[index].color);
      setColorPickerOpen(false);
    }
  };

  return (
    <div className="flex overflow-x-scroll scrollbar-hide pt-10">
      {toolDatas.map((tool, index) => (
        <img
          key={index}
          src={tool.tool}
          className={`transition-transform duration-500 ${
            selectedTool === index ? "-translate-y-10" : ""
          }`}
          style={{ width: "70px", margin: "5px", cursor: "pointer" }}
          onClick={() => handleToolSelect(index)}
        />
      ))}
    </div>
  );
};

export default DrawingToolBar;
