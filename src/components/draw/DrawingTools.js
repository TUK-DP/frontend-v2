import React from "react";
import DrawingToolBar from "./DrawingToolBar";

const DrawingTools = () => {
  return (
    <div className="fixed bottom-[-7rem]">
      <input type="range" />
      <DrawingToolBar />
    </div>
  );
};

export default DrawingTools;
