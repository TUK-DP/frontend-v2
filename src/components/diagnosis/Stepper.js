import React from "react";
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

const Stepper = ({ totalSteps, selectedButtons, onStepClick }) => {
  const getSize = () => (window.innerWidth >= 768 ? 50 : 30); // md 이상이면 50, 아니면 30

  const icons = [
    <TbNumber1Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber2Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber3Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1] "
    />,
    <TbNumber4Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber5Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1] "
    />,
    <TbNumber6Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber7Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber8Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1] "
    />,
    <TbNumber9Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber10Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1] "
    />,
    <TbNumber11Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber12Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber13Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1] "
    />,
    <TbNumber14Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1]"
    />,
    <TbNumber15Small
      size={getSize()}
      color="white"
      className="border-2 rounded-full bg-[#6100C1] "
    />,
  ];

  return (
    <div className="w-full flex items-center my-14 overflow-x-scroll scrollbar-hide px-5 md:px-10">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className="flex items-center cursor-pointer"
          onClick={() => onStepClick(index)}
        >
          {selectedButtons[index] ? (
            <TbCircleCheck size={getSize()} color="#6100C1" />
          ) : (
            <div className="relative">{icons[index]}</div>
          )}
          {index < totalSteps - 1 && <div className="w-12 md:w-20"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
