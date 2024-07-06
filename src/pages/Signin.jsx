import React, { useState } from "react";
import AppLogo from "../assets/AppLogo.png";
import PurpleButton from "../components/signup/PurpleButton";
import { useNavigate } from "react-router-dom";
import { SIGNUP_PAGE_PATH } from "./Signup";
import ErrorMessage from "../components/signup/ErrorMessage";

export const SIGNIN_PAGE_PATH = "/signin";
const ERROR_MESSAGE = {
  EMPTY_ERROR: "필수 입력 항목입니다.",
  INVALID_EMAIL: "올바르지 않는 이메일 형식입니다.",
  INVALID_PASSWORD: "비밀번호는 6자 이상이어야 합니다.",
};

const handleClickLoginButton = () => {};
const Signin = () => {
  return (
    <div className={"w-full h-full flex flex-col items-center justify-center"}>
      <div className={"w-5/6 h-full flex flex-col justify-center items-center"}>
        <img src={AppLogo} className={"pt-24 w-3/4"} />
        <div className={"flex-1 flex flex-col justify-center w-full"}>
          <InputEmail />
          <InputPassword />
        </div>
        <PurpleButton text="로그인" />
      </div>
      <MoveToSignUp />
    </div>
  );
};

export default Signin;

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
    <div className={"flex flex-col justify-center mb-4"}>
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

const InputPassword = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const validatePassword = (password) => {
    if (password === "") {
      setErrorMessage(ERROR_MESSAGE.EMPTY_ERROR);
    } else if (password.length < 6) {
      setErrorMessage(ERROR_MESSAGE.INVALID_PASSWORD);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>비밀번호</div>
      <input
        type="password"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => validatePassword(e.target.value)}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

const MoveToSignUp = () => {
  const navigate = useNavigate();
  const handleClickSignupButton = () => {
    navigate(SIGNUP_PAGE_PATH);
  };
  return (
    <div className={"pb-24 pt-4 flex text-lg w-11/12 justify-evenly "}>
      <span>아직 회원이 아니신가요?</span>
      <span
        className={"text-[#010BFF] font-bold"}
        onClick={handleClickSignupButton}
      >
        회원가입 하러가기 {">"}
      </span>
    </div>
  );
};
