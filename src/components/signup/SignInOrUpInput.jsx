import React, { useRef, useState } from "react";
import { isValidate, NOT_EMPTY } from "../../utils/validator/input";
import ErrorMessage from "./ErrorMessage";

export const SignInOrUpInput = ({
  name,
  value,
  className = "",
  inputTagName,
  type = "text",
  setIsError,
  handleChangeInput,
  inputShould = [NOT_EMPTY],
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleChangeInputValidate = (e) => {
    handleChangeInput(e);
    const inputValue = e.target.value;
    const { isValid, errorMessage } = isValidate({
      value: inputValue,
      should: inputShould,
    });
    setErrorMessage(errorMessage);
    setIsError(!isValid);
  };

  return (
    <div className={"flex flex-col justify-center w-full " + className}>
      <div>{name}</div>
      <input
        type={type}
        name={inputTagName}
        value={value}
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder={`${name}을 입력해주세요`}
        onChange={handleChangeInputValidate}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};
