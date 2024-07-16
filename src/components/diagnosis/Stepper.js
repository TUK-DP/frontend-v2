import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleCheck,
} from "react-icons/tb";

const Stepper = ({ totalSteps, selectedButtons, onStepClick }) => {
  const getSize = () => (window.innerWidth >= 768 ? 50 : 30); // md 이상이면 50, 아니면 30

  const icons = [
    <TbCircleNumber1Filled size={getSize()} color="#6100C1" />,
    <TbCircleNumber2Filled size={getSize()} color="#6100C1" />,
    <TbCircleNumber3Filled size={getSize()} color="#6100C1" />,
    <TbCircleNumber4Filled size={getSize()} color="#6100C1" />,
    <TbCircleNumber5Filled size={getSize()} color="#6100C1" />,
  ];

  return (
    <div className="w-full flex justify-center items-center mt-16 cursor-pointer">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className="flex items-center cursor-pointer"
          onClick={() => onStepClick(index)}
        >
          {selectedButtons[index] ? (
            <TbCircleCheck size={getSize()} color="#6100C1" />
          ) : (
            icons[index]
          )}
          {index < totalSteps - 1 && <div className="w-12 md:w-20"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
