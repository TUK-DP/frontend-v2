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
  const TOOL_LIST = [
    { id: "eraser", image: eraser, color: "transparent" },
    { id: "black", image: blackPencil, color: "#000000" },
    { id: "red", image: redPencil, color: "#FF0900" },
    { id: "orange", image: orangePencil, color: "#FF7700" },
    { id: "coral", image: coralPencil, color: "#FF9B8A" },
    { id: "yellow", image: yellowPencil, color: "#FFF200" },
    { id: "green", image: greenPencil, color: "#88FF00" },
    { id: "olive", image: olivePencil, color: "#007A08" },
    { id: "blue", image: bluePencil, color: "#0051FF" },
    { id: "navy", image: navyPencil, color: "#0C00AD" },
    { id: "purple", image: purplePencil, color: "#9000FF" },
    { id: "plum", image: plumPencil, color: "#78007A" },
    { id: "pink", image: pinkPencil, color: "#FF00EA" },
    { id: "babypink", image: babypinkPencil, color: "#FFA6E6" },
    { id: "apricot", image: apricotPencil, color: "#FFE4CF" },
    { id: "brown", image: brownPencil, color: "#854A19" },
    { id: "gray", image: grayPencil, color: "#919191" },
    {
      id: "rainbow",
      tool: rainbowPencil,
    },
  ];

  const [selectedTool, setSelectedTool] = useState(TOOL_LIST[1]);

  // rainbowPencil 클릭 시 컬러피커 표시
  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
    if (tool.id === "rainbow") {
      setColorPickerOpen(true);
    } else {
      setSelectedColor(tool.color);
      setColorPickerOpen(false);
    }
  };

  return (
    <div className="flex overflow-x-scroll scrollbar-hide pt-10">
      {TOOL_LIST.map((tool) => (
        <img
          key={tool.id}
          src={tool.image}
          className={`transition-transform duration-500 ${
            selectedTool.id === tool.id ? "-translate-y-10" : ""
          }`}
          style={{ width: "60px", margin: "5px", cursor: "pointer" }}
          onClick={() => handleToolSelect(tool)}
        />
      ))}
    </div>
  );
};

export default DrawingToolBar;
