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

const DrawingTools = () => {
  return (
    <>
      <DrawingToolBar />
    </>
  );
};

export default DrawingTools;

const DrawingToolBar = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const toolDatas = [
    eraser,
    redPencil,
    orangePencil,
    yellowPencil,
    greenPencil,
    bluePencil,
    navyPencil,
    purplePencil,
    pinkPencil,
    redPencil,
    orangePencil,
    yellowPencil,
    greenPencil,
    bluePencil,
    navyPencil,
    purplePencil,
    pinkPencil,
    rainbowPencil,
  ];

  return (
    <div className="flex fixed bottom-[-7rem] overflow-x-scroll scrollbar-hide w-full">
      {toolDatas.map((tool, index) => (
        <img
          key={index}
          src={tool}
          className={`transition-transform duration-500 ${
            selectedTool === index ? "-translate-y-12" : ""
          }`}
          style={{ width: "70px", margin: "5px" }}
          onClick={() => setSelectedTool(index)}
        />
      ))}
    </div>
  );
};
