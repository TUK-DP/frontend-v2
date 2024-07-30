import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/sliderStyles.css";
import Button from "../../components/Button";
import RecallTestSlider from "../../components/diary/RecallTestSlider";
import Stepper from "../../components/diary/Stepper";
import useRecallTestSlider from "../../hooks/diary/useRecallTestSlider";
import { useNavigate } from "react-router-dom";
import { DIARY_RECALL_RESULT_PAGE_PATH } from "./DiaryRecallResult";

export const DIARY_RECALL_TEST_PAGE_PATH = "/diary/recall/test";

const DiaryRecallTest = () => {
  const {
    sliderRef,
    currentSlide,
    setCurrentSlide,
    sliderItems,
    handlePrevClick,
    handleNextClick,
    handleResponse,
    handleStepClick,
  } = useRecallTestSlider();

  const isLastSlide = currentSlide.id === sliderItems.length - 1;

  let navigate = useNavigate();

  const handleNextButtonClick = () => {
    handleNextClick(() => {
      if (isLastSlide) {
        navigate(DIARY_RECALL_RESULT_PAGE_PATH);
      }
    });
  };

  return (
    <div className="py-6 md:py-10 relative">
      <div className="px-6 md:px-16">
        <Stepper {...{ currentSlide, sliderItems, handleStepClick }} />
        <RecallTestSlider
          {...{ sliderRef, sliderItems, setCurrentSlide, handleResponse }}
        />
      </div>
      <div className="w-full px-6 md:px-16 flex justify-between fixed bottom-10">
        <SliderPrevButton onClick={handlePrevClick} />
        <SliderNextButton
          onClick={handleNextButtonClick}
          isLastSlide={isLastSlide}
        />
      </div>
    </div>
  );
};

export default DiaryRecallTest;

const SliderPrevButton = ({ onClick }) => (
  <Button
    text="이전"
    onClick={onClick}
    className="w-[10rem] md:w-[18rem] md:h-[5rem] md:text-3xl cursor-pointer"
  />
);

const SliderNextButton = ({ onClick, isLastSlide }) => (
  <Button
    text={isLastSlide ? "완료" : "다음"}
    onClick={onClick}
    className="bg-[#6100C1] text-white w-[10rem] md:w-[18rem] md:h-[5rem] md:text-3xl cursor-pointer"
  />
);
