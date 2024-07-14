import React, { useEffect, useRef, useState } from "react";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { FaRegCircleCheck } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "../Spinner";

const Canvas = ({ keywords, setCanvasSlider, canvasSlider }) => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <CanvasSlider
        keywords={keywords}
        setCanvasSlider={setCanvasSlider}
        canvasSlider={canvasSlider}
      />
      <CanvasTools setIsError={setIsError} />
      <ErrorMessage isError={isError} />
    </>
  );
};

export default Canvas;

const CanvasSlider = ({ keywords, setCanvasSlider, keywordSlider }) => {
  const settings = {
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    dots: true,
  };
  let canvasSliderRef = useRef(null);
  useEffect(() => {
    setCanvasSlider(canvasSliderRef);
  }, []);

  return (
    <Slider
      {...settings}
      asNavFor={keywordSlider}
      ref={(slider) => (canvasSliderRef = slider)}
      className={"w-full"}
    >
      {keywords.map((keyword, index) => (
        <canvas
          key={index}
          className={"w-full bg-white aspect-square"}
        ></canvas>
      ))}
    </Slider>
  );
};

const CanvasTools = ({ setIsError }) => {
  return (
    <div className={"flex flex-row gap-10 justify-evenly items-center pt-10"}>
      <HiMiniArrowUturnLeft
        size={44}
        color="#838383"
        className={"cursor-pointer"}
      />
      <CompleteButton setIsError={setIsError} />
      <HiMiniArrowUturnRight
        size={44}
        color="#838383"
        className={"cursor-pointer"}
      />
    </div>
  );
};

const CompleteButton = ({ setIsError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClickCompleteButton = () => {
    //완료버튼 누르면 스피너 돌아가감
    //오류가 뜨면 오류메세지 출력
    //오류 없으면 페이지 이동
    setIsLoading(true);
    setTimeout(() => {
      setIsError(true);
      setIsLoading(false);
    }, 3000);
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
