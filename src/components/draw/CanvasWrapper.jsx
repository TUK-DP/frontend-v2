import React, { useEffect, useRef, useState } from "react";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { FaRegCircleCheck } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "../Spinner";
import CanvasSet from "./CanvasSet";
import { useDrawStateStore } from "../../stores/DrawState";
import { useKeywordStore } from "../../stores/KeywordStore";
import useFetchKeywords from "../../hooks/canvas/useFetchKeywords";
import useSaveCanvas from "../../hooks/canvas/useSaveCanvas";
import useGoDiary from "../../hooks/diary/useGoDiary";
import { useQueryClient } from "@tanstack/react-query";
import { diaryCheckQueryKey } from "../../hooks/diary/queries/useFetchDiaryChecks";
import { useCalendarStore } from "../../stores/CalendarStore";
import useGoSelectedKeyword from "../../hooks/canvas/useGoSelectedKeyword";

const CanvasWrapper = ({ setCanvasSlider, keywordSlider }) => {
  const [isError, setIsError] = useState(false);
  const { setSelectedKeyword, setIndex, index } = useKeywordStore();
  const { keywords } = useFetchKeywords();

  useEffect(() => {
    setSelectedKeyword(keywords[index]);
  }, [index]);

  return (
    <>
      <CanvasSlider
        keywords={keywords}
        setCanvasSlider={setCanvasSlider}
        keywordSlider={keywordSlider}
        setIndex={setIndex}
        setIsError={setIsError}
        index={index}
      />
      <ErrorMessage isError={isError} />
    </>
  );
};

export default CanvasWrapper;

const CanvasSlider = ({
  keywords,
  setCanvasSlider,
  keywordSlider,
  setIndex,
  setIsError,
  index,
}) => {
  const settings = {
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    swipe: false,
    beforeChange: (oldIndex, newIndex) => {
      setIndex(newIndex);
    },
  };

  let canvasSliderRef = useRef(null);

  useEffect(() => {
    setCanvasSlider(canvasSliderRef.current);
  }, []);

  // 캔버스 ref들 생성
  const canvasRefs = useRef(keywords.map((_) => React.createRef()));
  const canvasBgRefs = useRef(keywords.map((_) => React.createRef()));

  const canvasWidth =
    window.innerWidth > 640
      ? `${window.innerWidth - 160}px`
      : `${window.innerWidth - 40}px`;

  useGoSelectedKeyword(canvasSliderRef);

  return (
    <>
      <Slider
        {...settings}
        asNavFor={keywordSlider}
        ref={canvasSliderRef}
        className={"w-full"}
      >
        {keywords.map((keyword, index) => (
          <CanvasSet
            key={index}
            keyword={keyword}
            canvasWidth={canvasWidth}
            canvasRef={canvasRefs.current[index]}
            canvasBgRef={canvasBgRefs.current[index]}
          />
        ))}
      </Slider>
      <CanvasTools
        setIsError={setIsError}
        index={index}
        canvasRefs={canvasRefs.current}
        canvasBgRefs={canvasBgRefs.current}
        keywords={keywords}
      />
    </>
  );
};

const CanvasTools = ({
  setIsError,
  canvasRefs,
  canvasBgRefs,
  index,
  keywords,
}) => {
  const { undo, redo } = useDrawStateStore();
  const handleClickUndoButton = () => {
    undo(keywords[index].keywordId, canvasRefs[index]);
  };
  const handleClickRedoButton = () => {
    redo(keywords[index].keywordId, canvasRefs[index]);
  };
  return (
    <div className={"flex flex-row gap-10 justify-evenly items-center pt-10"}>
      <HiMiniArrowUturnLeft
        size={44}
        color="#838383"
        className={"cursor-pointer"}
        onClick={handleClickUndoButton}
      />
      <CompleteButton
        setIsError={setIsError}
        canvasRefs={canvasRefs}
        canvasBgRefs={canvasBgRefs}
      />
      <HiMiniArrowUturnRight
        size={44}
        color="#838383"
        className={"cursor-pointer"}
        onClick={handleClickRedoButton}
      />
    </div>
  );
};

const CompleteButton = ({ setIsError, canvasRefs, canvasBgRefs }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { saveCanvas } = useSaveCanvas();
  const { goDiaryPage } = useGoDiary();
  const queryClient = useQueryClient();
  const { selectedDate } = useCalendarStore((state) => state);

  const handleClickCompleteButton = async () => {
    setIsLoading(true);
    try {
      await saveCanvas(canvasRefs, canvasBgRefs);
    } catch {
      setIsError(true);
    }
    setIsLoading(false);

    // 일기 그림 저장시 다이러리 관련 쿼리 캐시 무효와
    await queryClient.invalidateQueries(diaryCheckQueryKey(selectedDate));

    //에러 발생시 이동안하도록
    goDiaryPage();
  };

  return (
    <button
      className={
        "mobile:text-2xl text-4xl font-bold text-white bg-primary-600 mobile:w-28 mobile:h-11 w-40 h-16 rounded-3.5xl flex flex-row justify-center items-center gap-2"
      }
      onClick={handleClickCompleteButton}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <p>완료</p>
          <FaRegCircleCheck className={"mobile:w-7 w-12"} color="#ffffff" />
        </>
      )}
    </button>
  );
};

const ErrorMessage = ({ isError }) => {
  return (
    <div
      className={
        "w-full grid place-items-center text-[#FF0000] pt-3  font-bold mobile:text-lg text-3xl"
      }
    >
      {isError && "오류입니다. 잠시 후 다시 저장해주세요."}
    </div>
  );
};
