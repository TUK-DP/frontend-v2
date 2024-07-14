import React, { Children } from "react";
import HeaderBar from "../components/HeaderBar";
import PaperBackgroundWrapper from "../components/diary/PaperBackgroundWrapper";
import KeywordSlider from "../components/diary/KeywordSlider";
import Canvas from "../components/diary/Canvas";
import aiHelpRobot from "../assets/draw/aiHelpRobot.png";
import showOtherDraw from "../assets/draw/showOtherDraw.png";

export const DIARY_DRAW_PAGE_PATH = "/diary/draw";
const DiaryDraw = () => {
  const keywords = ["키워드1", "키워드2", "키워드3"];
  return (
    <PaperBackgroundWrapper>
      <HeaderBar />
      <div className={"mobile:px-5 px-20 pb-5"}>
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
      <div className={"font-bold mobile:text-2xl mobile:py-5 text-4xl py-10 "}>
        혹시 그리기 어려우신가요?
      </div>
      {children}
    </div>
  );
};
const DrawHelpButtons = () => {
  return (
    <div className={"flex gap-5 justify-center items-center"}>
      <div
        className={
          "w-1/2 aspect-square bg-aiHelpButton rounded-lg-xl flex flex-col justify-between items-end mobile:p-5 p-10 cursor-pointer"
        }
      >
        <p className={"font-bold mobile:text-xl text-4xl text-left w-full"}>
          AI 도움받기
        </p>
        <img src={aiHelpRobot} className={"mobile:w-16 w-32"} />
      </div>
      <div
        className={
          "w-1/2 aspect-square bg-showOtherDrawButton rounded-lg-xl flex flex-col justify-between items-end mobile:px-5 mobile:p-5 p-10 cursor-pointer"
        }
      >
        <p className={"font-bold mobile:text-xl text-4xl text-left w-full"}>
          다른 사람
          <br />
          그림 구경하기
        </p>
        <img src={showOtherDraw} className={"mobile:w-16 w-32"} />
      </div>
    </div>
  );
};
