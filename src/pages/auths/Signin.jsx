import React, { useState } from "react";
import AppLogo from "../../assets/AppLogo.png";
import PurpleButton from "../../components/signup/PurpleButton";
import { useNavigate } from "react-router-dom";
import { SIGNUP_PAGE_PATH } from "./Signup";
import {
  LOGIN_ID_FORMAT,
  NOT_EMPTY,
  PASSWORD_FORMAT,
} from "../../utils/validator/input";
import { useInput } from "../../hooks/inputs/useInput";
import { SignInOrUpInput } from "../../components/signup/SignInOrUpInput";

export const SIGNIN_PAGE_PATH = "/signin";

export const SIGN_IN_FORM_KEY = {
  LOGIN_ID: "loginId",
  PASSWORD: "password",
};

const Signin = () => {
  const {
    form: signInForm,
    handleChangeInput,
    setForm: setSignInForm,
  } = useInput({
    [SIGN_IN_FORM_KEY.LOGIN_ID]: "",
    [SIGN_IN_FORM_KEY.PASSWORD]: "",
  });

  const [isErrorExist, setIsErrorExist] = useState(true);

  const SIGN_IN_INPUT_LIST = [
    {
      name: "아이디",
      type: "text",
      inputTagName: SIGN_IN_FORM_KEY.LOGIN_ID,
      inputShould: [NOT_EMPTY, LOGIN_ID_FORMAT],
    },
    {
      name: "비밀번호",
      type: "password",
      inputTagName: SIGN_IN_FORM_KEY.PASSWORD,
      inputShould: [NOT_EMPTY, PASSWORD_FORMAT],
    },
  ];

  return (
    <div className={"w-full h-full flex flex-col items-center justify-center"}>
      <div className={"w-5/6 h-full flex flex-col justify-center items-center"}>
        <img src={AppLogo} className={"mt-12 w-3/4"} />
        <div className={"flex-1 flex flex-col justify-center w-full"}>
          {SIGN_IN_INPUT_LIST.map(({ inputTagName, ...props }) => (
            <SignInOrUpInput
              key={inputTagName}
              {...{ handleChangeInput, inputTagName, ...props }}
              value={signInForm[inputTagName]}
              setIsError={setIsErrorExist}
            />
          ))}
        </div>
        <PurpleButton text="로그인" />
      </div>
      <MoveToSignUp />
    </div>
  );
};

export default Signin;

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
