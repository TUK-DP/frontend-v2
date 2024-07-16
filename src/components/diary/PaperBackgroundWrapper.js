import React from "react";
import paperImg from "../../assets/diary/backgroud_paper.png";
import { Outlet } from "react-router-dom";

const PaperBackgroundWrapper = (props) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${paperImg})` }}
    >
      <Outlet />
    </div>
  );
};

export default PaperBackgroundWrapper;
