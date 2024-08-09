import React from "react";
import paperImg from "../../assets/diary/backgroud_paper.png";
import { Outlet } from "react-router-dom";

const PaperBackgroundWrapper = (props) => {
  return (
    <div
      className="min-h-screen -mt-headerBarHeight pt-headerBarHeight bg-cover bg-center"
      style={{ backgroundImage: `url(${paperImg})` }}
    >
      <Outlet />
    </div>
  );
};

export default PaperBackgroundWrapper;
