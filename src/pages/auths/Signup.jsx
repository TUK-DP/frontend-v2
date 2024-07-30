import SignupSlider from "../../components/signup/SignupSlider";
import { useInput } from "../../hooks/inputs/useInput";
import InputStep1 from "../../components/signup/InputStep1";
import React, { useRef, useState } from "react";
import InputStep2 from "../../components/signup/InputStep2";

export const SIGNUP_PAGE_PATH = "/signup";

export const SIGH_UP_FORM_KEY = {
  ACCOUNT_ID: "accountId",
  USERNAME: "username",
  PASSWORD: "password",
};

const Signup = () => {
  const { form: signUpForm, handleChangeInput } = useInput({
    [SIGH_UP_FORM_KEY.ACCOUNT_ID]: "",
    [SIGH_UP_FORM_KEY.PASSWORD]: "",
    [SIGH_UP_FORM_KEY.USERNAME]: "",
  });

  const [isErrorExist, setIsErrorExist] = useState({
    [SIGH_UP_FORM_KEY.ACCOUNT_ID]: true,
    [SIGH_UP_FORM_KEY.PASSWORD]: true,
    [SIGH_UP_FORM_KEY.USERNAME]: true,
    checkPassword: true,
    duplicateCheck: true,
  });

  const sliderRef = useRef(null);

  const goNextStep = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className={"flex flex-col h-full"}>
        <SignupSlider sliderRef={sliderRef}>
          <InputStep1
            {...{
              signUpForm,
              handleChangeInput,
              goNextStep,
              isErrorExist,
              setIsErrorExist,
            }}
          />
          <InputStep2
            {...{
              signUpForm,
              handleChangeInput,
              isErrorExist,
              setIsErrorExist,
            }}
          />
        </SignupSlider>
      </div>
    </>
  );
};

export default Signup;
