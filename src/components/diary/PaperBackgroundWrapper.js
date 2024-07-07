import React from "react";
import paperImg from "../../assets/diary/backgroud_paper.png";

const PaperBackgroundWrapper = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${paperImg})` }}
    >
      {children}
    </div>
  );
};

export default PaperBackgroundWrapper;
