import React, { useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import SignupStep from "../components/signup/SignupStep";
import InputStep1 from "../components/signup/InputStep1";
import InputStep2 from "../components/signup/InputStep2";
import SwipeWrapper from "../components/signup/SwipeWrapper";
import { useInput } from "../hooks/useInput";

export const SIGNUP_PAGE_PATH = "/signup";
const MAX_INDEX = 1;
//헤더바와 스텝바의 높이를 더한 것
const UPPER_CONTAINER_HEIGHT = 142;

export const SIGN_UP_FORM_EMAIL_KEY = "email";
export const SIGN_UP_FORM_PASSWORD_KEY = "password";
export const SIGN_UP_FORM_NAME_KEY = "name";
export const SIGN_UP_FORM_BIRTH_KEY = "birth";

const Signup = () => {
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    form: signUpForm,
    setForm: setSignUpForm,
    handleChangeInput,
  } = useInput({
    [SIGN_UP_FORM_EMAIL_KEY]: "",
    [SIGN_UP_FORM_PASSWORD_KEY]: "",
    [SIGN_UP_FORM_NAME_KEY]: "",
    [SIGN_UP_FORM_BIRTH_KEY]: "",
  });

  useEffect(() => {
    setDynamicHeight(window.innerHeight - UPPER_CONTAINER_HEIGHT);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-x-hidden">
      <HeaderBar />
      <SignupStep step={currentIndex + 1} />
      <SwipeWrapper
        maxIndex={MAX_INDEX}
        height={dynamicHeight}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        <InputStep1
          setCurrentIndex={setCurrentIndex}
          handleChangeInput={handleChangeInput}
        />
        <InputStep2
          signUpForm={signUpForm}
          handleChangeInput={handleChangeInput}
        />
      </SwipeWrapper>
    </div>
  );
};

export default Signup;
