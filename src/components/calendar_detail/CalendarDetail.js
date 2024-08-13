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
import useFetchDiaryChecks from "../../hooks/diary/queries/useFetchDiaryChecks";

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
      <div className={"text-3xl text-white font-bold"}>
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
  const { isDiaryImageExist } = useFetchDiaryChecks();

  if (isDiaryImageExist) return;

  return (
    <>
      <div className={"text-3xl text-white font-bold"}>
        그림이 없네요 <br/> 그림도 그려 볼까요?
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
      className={"rounded-2xl bg-white flex p-8 cursor-pointer h-40 mobile:h-32"}
    >
      <GoDrawingIcon className={"h-full aspect-square mr-12 " + "mobile:mr-6"} />
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
