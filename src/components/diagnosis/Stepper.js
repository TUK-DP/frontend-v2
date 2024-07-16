import React, { useRef, useEffect } from "react";
import {
  TbNumber1Small,
  TbNumber2Small,
  TbNumber3Small,
  TbNumber4Small,
  TbNumber5Small,
  TbNumber6Small,
  TbNumber7Small,
  TbNumber8Small,
  TbNumber9Small,
  TbNumber10Small,
  TbNumber11Small,
  TbNumber12Small,
  TbNumber13Small,
  TbNumber14Small,
  TbNumber15Small,
  TbCircleCheck,
} from "react-icons/tb";

const Stepper = ({ currentStep, totalSteps, selectedButtons, onStepClick }) => {
  const getSize = () => (window.innerWidth >= 768 ? 50 : 30);

  const icons = [
    TbNumber1Small,
    TbNumber2Small,
    TbNumber3Small,
    TbNumber4Small,
    TbNumber5Small,
    TbNumber6Small,
    TbNumber7Small,
    TbNumber8Small,
    TbNumber9Small,
    TbNumber10Small,
    TbNumber11Small,
    TbNumber12Small,
    TbNumber13Small,
    TbNumber14Small,
    TbNumber15Small,
  ];
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (scrollerRef.current) {
      const selectedStepElement =
        scrollerRef.current.children[
          currentStep - 1
        ]; /* 현재 슬라이드에 해당하는 step */
      if (selectedStepElement) {
        const containerWidth =
          scrollerRef.current.offsetWidth; /* stepper 컨테이너 너비 */
        const iconWidth = getSize(); /* 아이콘 너비 */
        const iconOffsetLeft =
          selectedStepElement.offsetLeft; /* 아이콘의 왼쪽 오프셋 위치 */
        const scrollPosition =
          iconOffsetLeft -
          containerWidth / 2 +
          iconWidth / 2; /* 스크롤 위치 계산하여 화면 중앙에 위치 */
        scrollerRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [currentStep]);

  return (
    <div
      className="w-full flex items-center my-14 overflow-x-scroll scrollbar-hide px-5 md:px-10"
      ref={scrollerRef}
    >
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="flex items-center cursor-pointer"
          onClick={() => onStepClick(index)}
        >
          {selectedButtons[index] ? (
            <TbCircleCheck size={getSize()} color="#6100C1" />
          ) : (
            <Icon
              size={getSize()}
              color="white"
              className="border-2 rounded-full bg-[#6100C1]"
            />
          )}
          {index < totalSteps - 1 && <div className="w-12 md:w-20"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
