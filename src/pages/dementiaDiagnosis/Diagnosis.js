import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/sliderStyles.css"; // 슬라이더 스타일 파일
import Button from "../../components/Button"; // 버튼 컴포넌트
import DiagnosisSlider from "../../components/diagnosis/DiagnosisSlider"; // 진단 슬라이더 컴포넌트
import Stepper from "../../components/diagnosis/Stepper"; // 스테퍼 컴포넌트

export const DIAGNOSIS_PAGE_PATH = "/diagnosis";

const Diagnosis = () => {
  const sliderRef = useRef(null); // 슬라이더 ref
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const [selectedButtons, setSelectedButtons] = useState(Array(15).fill(null)); // 선택된 버튼 상태 배열 (15개)
  const totalSlides = 15; // 총 슬라이드 개수

  // 이전 버튼 클릭 핸들러
  const handlePrevClick = () => {
    sliderRef.current.slickPrev(); // React Slick의 이전 슬라이드 함수 호출
  };

  // 다음(완료) 버튼 클릭 핸들러
  const handleNextClick = () => {
    if (currentSlide === totalSlides - 1) {
      // 마지막 슬라이드일 때
      const firstUncheckedSlide = selectedButtons.findIndex(
        (button) => button === null
      ); // 체크되지 않은 첫 번째 슬라이드 찾기
      if (firstUncheckedSlide !== -1) {
        sliderRef.current.slickGoTo(firstUncheckedSlide); // 첫 번째 체크되지 않은 슬라이드로 이동
      } else {
        /* 진단이 완료된 경우 */
      }
    } else {
      sliderRef.current.slickNext(); // 다음 슬라이드로 이동
    }
  };

  // 슬라이드 변경 핸들러
  const handleSlideChange = (current) => {
    setCurrentSlide(current); // 현재 슬라이드 상태 업데이트
  };

  // 응답 처리 핸들러
  const handleResponse = (slideId, buttonId) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[slideId] = buttonId; // 선택된 버튼 상태 업데이트
    setSelectedButtons(newSelectedButtons);
  };

  // 스텝 클릭 핸들러
  const handleStepClick = (step) => {
    sliderRef.current.slickGoTo(step); // 해당 슬라이드로 이동
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

// 이전 버튼 컴포넌트
const SliderPrevButton = ({ onClick }) => {
  return (
    <Button
      text="이전"
      onClick={onClick}
      className="w-[10rem] md:w-[18rem] md:h-[5rem] md:text-3xl cursor-pointer"
    />
  );
};

// 다음(완료) 버튼 컴포넌트
const SliderNextButton = ({ onClick, isLastSlide }) => {
  return (
    <Button
      text={isLastSlide ? "완료" : "다음"}
      onClick={onClick}
      className="bg-[#6100C1] text-white w-[10rem] md:w-[18rem] md:h-[5rem] md:text-3xl cursor-pointer"
    />
  );
};
