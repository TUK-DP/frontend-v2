import React, { useState } from "react";
import AppLogo from "../assets/AppLogo.png";
import PurpleButton from "../components/signup/PurpleButton";
import { useNavigate } from "react-router-dom";
import { SIGNUP_PAGE_PATH } from "./Signup";
import ErrorMessage from "../components/signup/ErrorMessage";
import {
  EMAIL_FORMAT,
  isValidate,
  NOT_EMPTY,
  PASSWORD_FORMAT,
} from "../utils/validator/input";
import { useInput } from "../hooks/useInput";

export const SIGNIN_PAGE_PATH = "/signin";

export const SIGN_IN_FORM_EMAIL_KEY = "email";
export const SIGN_IN_FORM_PASSWORD_KEY = "password";

const Signin = () => {
  const {
    form: signInForm,
    handleChangeInput,
    setForm: setSignInForm,
  } = useInput({
    [SIGN_IN_FORM_EMAIL_KEY]: "",
    [SIGN_IN_FORM_PASSWORD_KEY]: "",
  });

  return (
    <div className={"w-full h-full flex flex-col items-center justify-center"}>
      <div className={"w-5/6 h-full flex flex-col justify-center items-center"}>
        <img src={AppLogo} className={"pt-24 w-3/4"} />
        <div className={"flex-1 flex flex-col justify-center w-full"}>
          <InputEmail handleChangeInput={handleChangeInput} />
          <InputPassword handleChangeInput={handleChangeInput} />
        </div>
        <PurpleButton text="로그인" />
      </div>
      <MoveToSignUp />
    </div>
  );
};

export default Signin;

const InputEmail = ({ handleChangeInput = (e) => e }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleChangeInputEmail = (e) => {
    handleChangeInput(e);
    const email = e.target.value;

    const { errorMessage } = isValidate({
      value: email,
      should: [NOT_EMPTY, EMAIL_FORMAT],
    });

    setErrorMessage(errorMessage);
  };
  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>이메일</div>
      <input
        name={SIGN_IN_FORM_EMAIL_KEY}
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

const InputPassword = ({ handleChangeInput = (e) => e }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeInputPassword = (e) => {
    handleChangeInput(e);

    const password = e.target.value;
    const { errorMessage } = isValidate({
      value: password,
      should: [NOT_EMPTY, PASSWORD_FORMAT],
    });

    setErrorMessage(errorMessage);
  };

  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>비밀번호</div>
      <input
        name={SIGN_IN_FORM_PASSWORD_KEY}
        type="password"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder="비밀번호를 입력해주세요"
        onChange={handleChangeInputPassword}
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
