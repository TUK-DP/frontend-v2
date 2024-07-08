import React, { useState } from "react";
import PurpleButton from "./PurpleButton";
import ErrorMessage from "./ErrorMessage";
import Spinner from "../Spinner";
import {
  EMAIL_FORMAT,
  isValidate,
  NOT_EMPTY,
} from "../../utils/validator/input";

const InputStep1 = ({ setCurrentIndex, handleChangeInput }) => {
  const [isEmailError, setIsEmailError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickNextButton = () => {
    //중복확인 추가해야함
    if (isEmailError) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 1));
    }, 3000);
  };

  return (
    <div className={"flex h-full justify-center min-w-full "}>
      <div className="w-5/6 h-full flex flex-col justify-center items-center pb-20">
        <InputEmail
          setIsEmailError={setIsEmailError}
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

const InputEmail = ({ setIsEmailError, handleChangeInput }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleChangeInputEmail = (e) => {
    handleChangeInput(e);
    const email = e.target.value;
    const { isValid, errorMessage } = isValidate({
      value: email,
      should: [NOT_EMPTY, EMAIL_FORMAT],
    });
    setIsEmailError(!isValid);
    setErrorMessage(errorMessage);
  };

  return (
    <div className={"flex flex-col justify-center mb-20 w-full flex-1"}>
      <div>이메일</div>
      <input
        type="text"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder="이메일을 입력해주세요"
        onChange={handleChangeInputEmail}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};
