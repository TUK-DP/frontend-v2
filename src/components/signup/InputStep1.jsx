import React from "react";
import PurpleButton from "./PurpleButton";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Spinner from "../Spinner";

const validate = [
  { name: "notEmpty", regex: /.+/, errorMessage: "필수 입력 항목입니다." },
  {
    name: "isEmail",
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
    errorMessage: "올바르지 않는 이메일 형식입니다.",
  },
];

const InputStep1 = ({ setCurrentIndex }) => {
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
        <InputEmail setIsEmailError={setIsEmailError} />
        <PurpleButton
          text={isLoading ? <Spinner /> : "중복확인"}
          handleClickButton={handleClickNextButton}
        />
      </div>
    </div>
  );
};

export default InputStep1;

const InputEmail = ({ setIsEmailError }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const validateEmail = (email) => {
    for (let i = 0; i < validate.length; i++) {
      const { regex, errorMessage } = validate[i];
      if (!regex.test(email)) {
        setErrorMessage(errorMessage);
        setIsEmailError(true);
        return;
      }
    }
    setErrorMessage("");
    setIsEmailError(false);
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
