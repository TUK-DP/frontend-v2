import React from "react";

export const DiaryDetailActionButton = ({
  heightClass = "h-40",
  className = "",
  title = "",
  icon: Icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={
        "relative bg-[#F4F4F4] flex-1 rounded-2xl cursor-pointer px-4 py-8" +
        ` ${className} ${heightClass}`
      }
    >
      <div className={"text-black font-bold text-3xl mobile:text-xl"}>
        {title}
      </div>
      <Icon className={"w-24 absolute bottom-4 right-4 mobile:w-16"} />
    </div>
  );
};
