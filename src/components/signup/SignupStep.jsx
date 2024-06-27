import React from "react";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleCheckFilled } from "react-icons/tb";

const INPUT_EMAIL = "이메일 입력";
const INPUT_INFO = "정보 입력";
const SigupStep = ({ step }) => {
  return (
    <div className={"w-full flex flex-row justify-center items-center py-5"}>
      {step === 1 && <Step1ProgressBar />}
      {step === 2 && <Step2ProgressBar />}
    </div>
  );
};

export default SigupStep;

const Step1ProgressBar = () => {
  return (
    <>
      <TbCircleNumber1Filled size={30} color="#1777FF" />
      <div className={"pl-2"}>{INPUT_EMAIL}</div>
      <div className={"w-16"}></div>
      <TbCircleNumber2 size={30} color="#1777FF" />
      <div className={"pl-2"}>{INPUT_INFO}</div>
    </>
  );
};

const Step2ProgressBar = () => {
  return (
    <>
      <TbCircleCheckFilled size={30} color="#1777FF" />
      <div className={"pl-2"}>{INPUT_EMAIL}</div>
      <div className={"w-16"}></div>
      <TbCircleNumber2Filled size={30} color="#1777FF" />
      <div className={"pl-2"}>{INPUT_INFO}</div>
    </>
  );
};
