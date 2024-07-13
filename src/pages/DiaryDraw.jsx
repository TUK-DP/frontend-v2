import React, { Children } from "react";
import HeaderBar from "../components/HeaderBar";
import PaperBackgroundWrapper from "../components/diary/PaperBackgroundWrapper";
import KeywordSlider from "../components/diary/KeywordSlider";
import Canvas from "../components/diary/Canvas";
import aiHelpRobot from "../assets/draw/aiHelpRobot.png";
import showOtherDraw from "../assets/draw/showOtherDraw.png";
import { createJSONStorage } from "zustand/middleware";

export const DIARY_DRAW_PAGE_PATH = "/diary/draw";
const DiaryDraw = () => {
  const keywords = ["키워드1", "키워드2", "키워드3"];
  return (
    <PaperBackgroundWrapper>
      <HeaderBar />
      <div className={"px-5"}>
        <KeywordSlider keywords={keywords} />
        <Canvas />
        <DrawHelpWrapper>
          <DrawHelpButtons />
        </DrawHelpWrapper>
      </div>
    </PaperBackgroundWrapper>
  );
};

export default DiaryDraw;

const DrawHelpWrapper = ({ children }) => {
  return (
    <div>
      <div className={"font-bold text-2xl py-5"}>혹시 그리기 어려우신가요?</div>
      {children}
    </div>
  );
};
const DrawHelpButtons = () => {
  return (
    <div className={"flex gap-5 justify-center items-center"}>
      <div
        className={
          "w-1/2 aspect-square bg-aiHelpButton rounded-lg-xl p-5 flex flex-col justify-between items-end"
        }
      >
        <p className={"font-bold text-xl text-left w-full"}>AI 도움받기</p>
        <img src={aiHelpRobot} className={"w-16"} />
      </div>
      <div
        className={
          "w-1/2 aspect-square bg-showOtherDrawButton rounded-lg-xl px-5 pt-2 pb-5 flex flex-col justify-between items-end"
        }
      >
        <p className={"font-bold text-xl text-left w-full"}>
          다른 사람
          <br />
          그림 구경하기
        </p>
        <img src={showOtherDraw} className={"w-16"} />
      </div>
    </div>
  );
};
