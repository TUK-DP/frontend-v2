import React from "react";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { FaRegCircleCheck } from "react-icons/fa6";

const Canvas = () => {
  return (
    <div>
      <canvas className={"w-full bg-white aspect-square"}></canvas>
      <div className={"flex flex-row gap-10 justify-evenly items-center pt-10"}>
        <HiMiniArrowUturnLeft
          size={44}
          color="#838383"
          className={"cursor-pointer"}
        />
        <button
          className={
            "mobile:text-2xl text-4xl font-bold text-white bg-primary-600 mobile:w-28 mobile:h-11 w-40 h-16 rounded-3.5xl flex flex-row justify-center items-center gap-2"
          }
        >
          <p>완료</p>
          <FaRegCircleCheck className={"mobile:w-7 w-12"} color="#ffffff" />
        </button>
        <HiMiniArrowUturnRight
          size={44}
          color="#838383"
          className={"cursor-pointer"}
        />
      </div>
    </div>
  );
};

export default Canvas;
