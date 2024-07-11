import HeaderBar from "../components/HeaderBar";
import SignupStep from "../components/signup/SignupStep";
import InputStep1 from "../components/signup/InputStep1";
import InputStep2 from "../components/signup/InputStep2";
import SwipeWrapper from "../components/signup/SwipeWrapper";
import { useInput } from "../hooks/useInput";
import InputStep1 from "../components/signup/InputStep1";
import React, { useState } from "react";
import InputStep2 from "../components/signup/InputStep2";
import SigupStep from "../components/signup/SignupStep";

export const SIGNUP_PAGE_PATH = "/signup";

export const SIGH_UP_FORM_KEY = {
  EMAIL: "email",
  PASSWORD: "password",
  NAME: "name",
  BIRTH: "birth",
};

const Signup = () => {
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    form: signUpForm,
    setForm: setSignUpForm,
    handleChangeInput,
  } = useInput({
    [SIGH_UP_FORM_KEY.EMAIL]: "",
    [SIGH_UP_FORM_KEY.PASSWORD]: "",
    [SIGH_UP_FORM_KEY.NAME]: "",
    [SIGH_UP_FORM_KEY.BIRTH]: "",
  });

  const [sliderStep, setSliderStep] = useState(1);

  return (
    <>
      <HeaderBar />
      <div className={"flex flex-col h-full"}>
        <SigupStep step={sliderStep} />
        <SignupSlider setSliderStep={setSliderStep}>
          <InputStep1
            signUpForm={signUpForm}
            handleChangeInput={handleChangeInput}
          />
          <InputStep2
            signUpForm={signUpForm}
            handleChangeInput={handleChangeInput}
          />
        </SignupSlider>
      </div>
    </>
  );
};

export default Signup;
