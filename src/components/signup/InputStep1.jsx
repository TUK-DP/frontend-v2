import React from "react";
import PurpleButton from "./PurpleButton";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const ERROR_MESSAGE = {
  EMPTY_ERROR: "필수 입력 항목입니다.",
  INVALID_EMAIL: "올바르지 않는 이메일 형식입니다.",
};

const InputStep1 = ({ handleClickNextStep }) => {
  return (
    <div className={"flex h-full justify-center min-w-full "}>
      <div className="w-5/6 h-full flex flex-col justify-center items-center pb-20">
        <InputEmail />
        <PurpleButton text="다음" handleClickButton={handleClickNextStep} />
      </div>
    </div>
  );
};

export default InputStep1;

const InputEmail = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      setErrorMessage(ERROR_MESSAGE.EMPTY_ERROR);
    } else if (!emailRegex.test(email)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_EMAIL);
    } else {
      setErrorMessage("");
    }
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
        onChange={(e) => validateEmail(e.target.value)}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};
