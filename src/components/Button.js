import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <div
      className={`${className} flex justify-center items-center h-14 rounded-xl text-2xl font-bold border-2 `}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
