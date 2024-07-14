import React, { useEffect, useRef, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import PaperBackgroundWrapper from "../components/diary/PaperBackgroundWrapper";
import KeywordSlider from "../components/diary/KeywordSlider";
import Canvas from "../components/diary/Canvas";
import aiHelpRobot from "../assets/draw/aiHelpRobot.png";
import showOtherDraw from "../assets/draw/showOtherDraw.png";

export const DIARY_DRAW_PAGE_PATH = "/diary/draw";
const DiaryDraw = () => {
  const keywords = ["키워드1", "키워드2", "키워드3"];
  const [keywordSlider, setKeywordSlider] = useState(null);
  const [canvasSlider, setCanvasSlider] = useState(null);

  return (
    <PaperBackgroundWrapper>
      <HeaderBar />
      <div className={"mobile:px-5 px-20 pb-5 pt-headerbarHeight"}>
        <KeywordSlider
          keywords={keywords}
          setKeywordSlider={setKeywordSlider}
          canvasSlider={canvasSlider}
        />
        <Canvas
          keywords={keywords}
          setCanvasSlider={setCanvasSlider}
          keywordSlider={keywordSlider}
        />
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
      <DrawHelpButton
        content={"AI 도움받기"}
        imgUrl={aiHelpRobot}
        bgColor="aiHelpButton"
      />
      <DrawHelpButton
        content={["다른 사람\n그림 구경하기"]}
        imgUrl={showOtherDraw}
        bgColor="showOtherDrawButton"
      />
    </div>
  );
};

const DrawHelpButton = ({ content, imgUrl, bgColor }) => {
  return (
    <div
      className={`w-1/2 aspect-square bg-${bgColor} rounded-lg-xl flex flex-col justify-between items-end mobile:p-5 p-10 cursor-pointer`}
    >
      <p
        className={
          "font-bold mobile:text-xl text-4xl text-left w-full whitespace-pre-wrap"
        }
      >
        {content}
      </p>
      <img src={imgUrl} className={"mobile:w-16 w-32"} />
    </div>
  );
};
