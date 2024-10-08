import React, { useEffect, useRef } from "react";
import { TbCircleCheck } from "react-icons/tb";
import { STEP_BAR_ICONS } from "../../hooks/Diagnosis/useDiagnosisSlider";

/**
 * @param currentSlide {SliderItem}
 * @param sliderItems {SliderItem[]}
 * @param handleStepClick
 */
const Stepper = ({ currentSlide, sliderItems, handleStepClick }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (scrollerRef.current) {
      moveStepper();
    }
  }, [currentSlide]);

  const moveStepper = () => {
    const selectedStepElement = scrollerRef.current?.children[currentSlide.id];

    if (!selectedStepElement) return;

    const containerWidth = scrollerRef.current.offsetWidth;
    const iconWidth = selectedStepElement.offsetWidth;
    const iconOffsetLeft = selectedStepElement.offsetLeft;

    const scrollPosition = iconOffsetLeft - containerWidth / 2 + iconWidth / 2;

    scrollerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="w-full flex items-center overflow-x-scroll scrollbar-hide px-5 md:px-10"
      ref={scrollerRef}
    >
      {sliderItems.map((slide, index) => (
        <div key={index} className="flex items-center">
          <StepperIcon
            index={index}
            isSelected={slide.selectedButtonId !== -1}
            onClick={handleStepClick}
          />
          {index < sliderItems.length - 1 && (
            <div
              className={`w-12 md:w-20 h-2
              ${currentSlide.id > index ? "bg-purple-700" : "bg-gray-400"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const StepperIcon = ({ index, isSelected, onClick }) => {
  const Icon = STEP_BAR_ICONS[index];
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => onClick(index)}
    >
      {isSelected ? (
        <TbCircleCheck color="#6100C1" className="w-10 h-10 md:w-16 md:h-16" />
      ) : (
        <Icon
          color="white"
          className="border-2 rounded-full bg-[#6100C1] w-10 h-10 md:w-16 md:h-16"
        />
      )}
    </div>
  );
};

export default Stepper;
