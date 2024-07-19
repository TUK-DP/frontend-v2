import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/sliderStyles.css";
import Button from "../../components/Button";
import DiagnosisSlider from "../../components/diagnosis/DiagnosisSlider";
import Stepper from "../../components/diagnosis/Stepper";
import useDiagnosisSlider from "../../hooks/Diagnosis/useDiagnosisSlider";

export const DIAGNOSIS_PAGE_PATH = "/diagnosis";

const Diagnosis = () => {
  const totalSlides = 15;
  const {
    sliderRef,
    currentSlide,
    selectedButtons,
    handlePrevClick,
    handleNextClick,
    handleSlideChange,
    handleResponse,
    handleStepClick,
  } = useDiagnosisSlider(totalSlides);

  return (
    <div>
      <Stepper
        currentStep={currentSlide}
        totalSteps={totalSlides}
        selectedButtons={selectedButtons}
        onStepClick={handleStepClick}
      />
      <DiagnosisSlider
        sliderRef={sliderRef}
        onSlideChange={handleSlideChange}
        selectedButtons={selectedButtons}
        onResponse={handleResponse}
      />
      <div className="w-full flex justify-between mt-16 md:mt-24 px-5 md:px-9">
        <SliderPrevButton onClick={handlePrevClick} />
        <SliderNextButton
          onClick={handleNextClick}
          isLastSlide={currentSlide === totalSlides - 1}
        />
      </div>
    </div>
  );
};

export default Diagnosis;

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
