import React, { useState } from "react";
import PurpleButton from "./PurpleButton";
import Spinner from "../Spinner";
import { SignInOrUpInput } from "./SignInOrUpInput";
import { SIGH_UP_FORM_KEY } from "../../pages/auths/Signup";
import { LOGIN_ID_FORMAT, NOT_EMPTY } from "../../utils/validator/input";

const InputStep1 = ({ signUpForm, handleChangeInput, goNextStep }) => {
  const [isEmailError, setIsEmailError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickNextButton = () => {
    //중복확인 추가해야함
    if (isEmailError) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      goNextStep();
    }, 1000);
  };

  const inputProps = {
    value: signUpForm[SIGH_UP_FORM_KEY.ACCOUNT_ID],
    inputTagName: SIGH_UP_FORM_KEY.ACCOUNT_ID,
    inputShould: [NOT_EMPTY, LOGIN_ID_FORMAT],
    setIsError: setIsEmailError,
    handleChangeInput,
  };

  return (
    <div className={"flex h-full justify-center "}>
      <div className="w-5/6 h-full flex flex-col justify-center items-center">
        <SignInOrUpInput name={"아이디"} className={"flex-1"} {...inputProps} />
        <PurpleButton
          text={isLoading ? <Spinner /> : "중복확인"}
          handleClickButton={handleClickNextButton}
        />
      </div>
    </div>
  );
};

export default InputStep1;
