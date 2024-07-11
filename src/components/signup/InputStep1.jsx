import React, { useState } from "react";
import PurpleButton from "./PurpleButton";
import Spinner from "../Spinner";
import { EMAIL_FORMAT, NOT_EMPTY } from "../../utils/validator/input";
import { SignInOrUpInput } from "./SignInOrUpInput";
import { SIGH_UP_FORM_KEY } from "../../pages/Signup";

const InputStep1 = ({ signUpForm, handleChangeInput }) => {
  const [isEmailError, setIsEmailError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickNextButton = () => {
    //중복확인 추가해야함
    if (isEmailError) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className={"flex h-full justify-center "}>
      <div className="w-5/6 h-full flex flex-col justify-center items-center">
        <SignInOrUpInput
          name={"이메일"}
          className={"flex-1"}
          value={signUpForm[SIGH_UP_FORM_KEY.EMAIL]}
          inputTagName={SIGH_UP_FORM_KEY.EMAIL}
          inputShould={[NOT_EMPTY, EMAIL_FORMAT]}
          setIsError={setIsEmailError}
          handleChangeInput={handleChangeInput}
        />
        <PurpleButton
          text={isLoading ? <Spinner /> : "중복확인"}
          handleClickButton={handleClickNextButton}
        />
      </div>
    </div>
  );
};

export default InputStep1;
