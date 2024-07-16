import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleCheck,
} from "react-icons/tb";

const Stepper = ({ currentStep, totalSteps, selectedButtons, onStepClick }) => {
  const icons = [
    <TbCircleNumber1Filled size={30} color="#6100C1" />,
    <TbCircleNumber2Filled size={30} color="#6100C1" />,
    <TbCircleNumber3Filled size={30} color="#6100C1" />,
    <TbCircleNumber4Filled size={30} color="#6100C1" />,
    <TbCircleNumber5Filled size={30} color="#6100C1" />,
  ];

  return (
    <div className="w-full flex justify-center items-center mt-8 cursor-pointer">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className="flex items-center cursor-pointer"
          onClick={() => onStepClick(index)}
        >
          {selectedButtons[index] ? (
            <TbCircleCheck size={30} color="#6100C1" />
          ) : (
            icons[index]
          )}
          {index < totalSteps - 1 && <div className="w-16"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
