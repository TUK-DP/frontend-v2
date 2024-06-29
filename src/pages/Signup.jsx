import React, { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import SigupStep from "../components/signup/SignupStep";
import InputStep1 from "../components/signup/InputStep1";
import InputStep2 from "../components/signup/InputStep2";

export const SIGNUP_PAGE_PATH = "/signup";

const Signup = () => {
  const [step, setStep] = useState(1);
  const handleClickNextStep = () => {
    setStep(step + 1);
  };
  return (
    <div className={"w-full h-full flex flex-col items-center justify-between"}>
      <HeaderBar />
      <SigupStep step={step} />
      <div className={"w-5/6 flex-1 flex flex-col justify-center items-center"}>
        {step === 1 && <InputStep1 handleClickNextStep={handleClickNextStep} />}
        {step === 2 && <InputStep2 />}
      </div>
    </div>
  );
};

export default Signup;
