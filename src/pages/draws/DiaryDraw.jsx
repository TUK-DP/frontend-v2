import React, { useState } from "react";
import KeywordSlider from "../../components/draw/KeywordSlider";
import Canvas from "../../components/draw/CanvasWrapper";
import aiHelpRobot from "../../assets/draw/aiHelpRobot.png";
import showOtherDraw from "../../assets/draw/showOtherDraw.png";
import useGoHelpWithAiPage from "../../hooks/HelpWithAi/useGoHelpWithAiPage";
import useGoKeywordReference from "../../hooks/diary/useGoKeywordReference";
import CanvasPalette from "../../components/draw/CanvasPalette";
import CanvasWrapper from "../../components/draw/CanvasWrapper";
import { useKeywordStore } from "../../stores/Keyword";

export const DIARY_DRAW_PAGE_PATH = "/diary/draw";
const DiaryDraw = () => {
  const [keywordSlider, setKeywordSlider] = useState(null);
  const [canvasSlider, setCanvasSlider] = useState(null);
  const { keywords } = useKeywordStore();

  return (
    <>
      <div className={"mobile:px-5 px-20 pb-5"}>
        <KeywordSlider
          keywords={keywords}
          setKeywordSlider={setKeywordSlider}
          canvasSlider={canvasSlider}
        />
        <CanvasWrapper
          keywords={keywords}
          setCanvasSlider={setCanvasSlider}
          keywordSlider={keywordSlider}
        />
        <DrawHelpWrapper>
          <DrawHelpButtons />
        </DrawHelpWrapper>
      </div>
      <CanvasPalette />
    </>
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
  let { goHelpForAiPage } = useGoHelpWithAiPage();
  let { goKeywordReferencePage } = useGoKeywordReference();

  return (
    <div className={"flex gap-5 justify-center items-center"}>
      <DrawHelpButton
        content={"AI 도움받기"}
        imgUrl={aiHelpRobot}
        bgColor="bg-aiHelpButton"
        onClick={goHelpForAiPage}
      />
      <DrawHelpButton
        content={"다른 사람\n그림 구경하기"}
        imgUrl={showOtherDraw}
        bgColor="bg-showOtherDrawButton"
        onClick={goKeywordReferencePage}
      />
    </div>
  );
};

const DrawHelpButton = ({ content, imgUrl, bgColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-1/2 aspect-square ${bgColor} rounded-lg-xl flex flex-col justify-between items-end mobile:p-5 p-10 cursor-pointer`}
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
