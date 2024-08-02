import React from "react";
import { GoRememoryIcon } from "./icon/GoRememoryIcon";
import { CheckDiaryIcon } from "./icon/CheckDiaryIcon";
import { DiaryDetailActionButton } from "./DiaryDetailActionButton";
import { GoDrawingIcon } from "./icon/GoDrawingIcon";
import useGoDiary from "../../hooks/diary/useGoDiary";
import { useNavigate } from "react-router-dom";
import { DIARY_RECALL_PAGE_PATH } from "../../pages/diarys/DiaryRecall";
import { DIARY_DETAIL_PAGE_PATH } from "../../pages/diaryDetails/DiaryDetail";
import useFetchDiary from "../../hooks/diary/queries/useFetchDiary";
import useFetchDiaryRecallQuiz from "../../hooks/diary/queries/useFetchRecallQuiz";
import { NO_DIARY_RECALL_PAGE_PATH } from "../../pages/diarys/NoDiaryRecall";

export const CalendarDetail = () => {
  const { isCanRender } = useFetchDiary();

  return (
    <div
      className={
        "flex flex-col gap-12 bg-primary-600 p-4 pt-20 h-full rounded-t-2xl"
      }
    >
      {isCanRender && (
        <>
          <WhatHappenSection />
          <GoDrawingSection />
        </>
      )}
    </div>
  );
};

const WhatHappenSection = () => {
  let navigate = useNavigate();
  const { quizData } = useFetchDiaryRecallQuiz();

  const buttons = [
    {
      title: "회상하러 가기",
      icon: GoRememoryIcon,
      onClick: () => {
        if (quizData.length === 0) navigate(NO_DIARY_RECALL_PAGE_PATH);
        if (quizData.length != 0) navigate(DIARY_RECALL_PAGE_PATH);
      },
    },
    {
      title: "일기 확인하기",
      icon: CheckDiaryIcon,
      onClick: () => navigate(DIARY_DETAIL_PAGE_PATH),
    },
  ];

  return (
    <>
      <div className={"text-3xl text-white font-bold mb-8"}>
        무슨 일이 있었나요?
      </div>
      <div className={`flex justify-between gap-8 mobile:gap-4`}>
        <DiaryDetailActionButton {...buttons[0]} />
        <DiaryDetailActionButton {...buttons[1]} />
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
