import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/sliderStyles.css";
import Button from "../../components/Button";
import DiagnosisSlider from "../../components/diagnosis/DiagnosisSlider";
import Stepper from "../../components/diagnosis/Stepper";

export const DIAGNOSIS_PAGE_PATH = "/diagnosis";

const Diagnosis = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState(Array(5).fill(null));
  const totalSlides = 5;

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    if (currentSlide === totalSlides - 1) {
      // 완료 버튼이 눌렸을 때, 체크되지 않은 슬라이더로 이동
      const firstUncheckedSlide = selectedButtons.findIndex(
        (button) => button === null
      );
      if (firstUncheckedSlide !== -1) {
        sliderRef.current.slickGoTo(firstUncheckedSlide);
      } else {
        /* 진단이 완료된 경우 */
      }
    } else {
      sliderRef.current.slickNext();
    }
  };

  const handleSlideChange = (current) => {
    setCurrentSlide(current);
  };

  const handleResponse = (slideId, buttonId) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[slideId] = buttonId;
    setSelectedButtons(newSelectedButtons);
  };

  const handleStepClick = (step) => {
    sliderRef.current.slickGoTo(step);
  };

  return (
    <div>
      <Stepper
        currentStep={currentSlide + 1}
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

const SliderPrevButton = ({ onClick }) => {
  return (
    <Button
      text="이전"
      onClick={onClick}
      className="w-[10rem] md:w-[18rem] md:h-[5rem] md:text-3xl cursor-pointer"
    />
  );
};

const SliderNextButton = ({ onClick, isLastSlide }) => {
  return (
    <Button
      text={isLastSlide ? "완료" : "다음"}
      onClick={onClick}
      className="bg-[#6100C1] text-white w-[10rem] md:w-[18rem] md:h-[5rem] md:text-3xl cursor-pointer"
    />
  );
};
