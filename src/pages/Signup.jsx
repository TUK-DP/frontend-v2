import React, { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import ProgressBar from "../components/signup/ProgressBar";
import InputEmail from "../components/signup/InputEmail";
import InputInfo from "../components/signup/InputInfo";
import PurpleButton from "../components/signup/PurpleButton";

export const SIGNUP_PAGE_PATH = "/signup";

const Signup = () => {
  const [step, setStep] = useState(1);
  return (
    <div className={"w-full h-full flex flex-col items-center justify-between"}>
      <HeaderBar />
      <ProgressBar step={step} />
      <div className={"w-5/6 flex-1 flex flex-col justify-center items-center"}>
        {step === 1 && <InputEmail />}
        {step === 2 && <InputInfo />}
      </div>
      <div className={"w-5/6 mb-28"}>
        <PurpleButton text="다음" />
      </div>
    </div>
  );
};

export default Signup;
