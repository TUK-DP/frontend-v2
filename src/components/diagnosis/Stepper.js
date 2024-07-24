import React, { useRef, useEffect } from "react";
import { TbCircleCheck } from "react-icons/tb";

const Stepper = ({
  currentStep,
  totalSteps,
  selectedButtons,
  onStepClick,
  icons,
}) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (scrollerRef.current) {
      moveStepper();
    }
  }, [currentStep]);

  const moveStepper = () => {
    const selectedStepElement = scrollerRef.current?.children[currentStep];

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
      {icons.map((Icon, index) => (
        <div key={index} className="flex items-center">
          <StepperIcon
            Icon={Icon}
            index={index}
            totalSteps={totalSteps}
            isSelected={!!selectedButtons[index]}
            onClick={onStepClick}
          />
          {index < totalSteps - 1 && (
            <div
              className={`w-12 md:w-20 h-2 ${
                currentStep > index ? "bg-purple-700" : "bg-gray-400"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

const StepperIcon = ({ Icon, index, isSelected, onClick }) => (
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

export default Stepper;
