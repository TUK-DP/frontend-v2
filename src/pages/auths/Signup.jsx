import SignupSlider from "../../components/signup/SignupSlider";
import { useInput } from "../../hooks/inputs/useInput";
import InputStep1 from "../../components/signup/InputStep1";
import React, { useRef } from "react";
import InputStep2 from "../../components/signup/InputStep2";

export const SIGNUP_PAGE_PATH = "/signup";

export const SIGH_UP_FORM_KEY = {
  LOGIN_ID: "loginId",
  NAME: "name",
  PASSWORD: "password",
};

const Signup = () => {
  const {
    form: signUpForm,
    setForm: setSignUpForm,
    handleChangeInput,
  } = useInput({
    [SIGH_UP_FORM_KEY.LOGIN_ID]: "",
    [SIGH_UP_FORM_KEY.PASSWORD]: "",
    [SIGH_UP_FORM_KEY.NAME]: "",
  });

  const sliderRef = useRef(null);

  const goNextStep = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className={"flex flex-col h-full"}>
        <SignupSlider sliderRef={sliderRef}>
          <InputStep1 {...{ signUpForm, handleChangeInput, goNextStep }} />
          <InputStep2 {...{ signUpForm, handleChangeInput }} />
        </SignupSlider>
      </div>
    </>
  );
};

export default Signup;
