import React from "react";
import { GoRememoryIcon } from "./icon/GoRememoryIcon";
import { CheckDiaryIcon } from "./icon/CheckDiaryIcon";
import { DiaryDetailActionButton } from "./DiaryDetailActionButton";
import { GoDrawingIcon } from "./icon/GoDrawingIcon";
import useGoDiary from "../../hooks/diary/useGoDiary";

export const CalendarDetail = ({ selectedDate }) => {
  return (
    <div className={"bg-primary-600 p-4 pt-20 h-full rounded-t-2xl"}>
      <WhatHappenSection mb={"mb-12"} />
      <GoDrawingSection />
    </div>
  );
};

const WhatHappenSection = ({ mb }) => {
  return (
    <>
      <div className={"text-3xl text-white font-bold mb-8"}>
        무슨 일이 있었나요?
      </div>
      <div className={`flex justify-between gap-8 mobile:gap-4 ${mb}`}>
        <DiaryDetailActionButton
          title={"회상하러 가기"}
          icon={GoRememoryIcon}
        />
        <DiaryDetailActionButton
          title={"일기 확인하기"}
          icon={CheckDiaryIcon}
        />
      </div>
    </>
  );
};

const GoDrawingSection = () => {
  return (
    <>
      <div className={"text-3xl text-white font-bold mb-8"}>
        그림도 그려 볼까요?
      </div>
      <GoDrawingButton />
    </>
  );
};

const GoDrawingButton = () => {
  let { goDiaryDrawPage } = useGoDiary();
  return (
    <div
      onClick={goDiaryDrawPage}
      className={"rounded-2xl bg-white flex p-4 cursor-pointer"}
    >
      <GoDrawingIcon className={"w-20 mr-12 " + "mobile:w-14 mobile:mr-6"} />
      <div
        className={
          "flex flex-col justify-between font-bold text-2xl mobile:text-xl"
        }
      >
        <p>그림을 그리고</p>
        <p>치매 예방을 해보세요!</p>
      </div>
    </div>
  );
};
