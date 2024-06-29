import React from "react";

const PurpleButton = ({ text, handleClickButton }) => {
  return (
    <button
      className={
        "bg-primary-600 w-full h-[46px] rounded-lg-xl text-white text-2xl font-bold"
      }
      onClick={handleClickButton}
    >
      {text}
    </button>
  );
};

export default PurpleButton;
