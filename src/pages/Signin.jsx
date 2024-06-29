import React from "react";
import AppLogo from "../assets/AppLogo.png";
import PurpleButton from "../components/signup/PurpleButton";
import { useNavigate } from "react-router-dom";
import { SIGNUP_PAGE_PATH } from "./Signup";

export const SIGNIN_PAGE_PATH = "/signin";
const ERROR_MESSAGE = "* 올바르지 않는 이메일 형식입니다.";

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
  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>이메일</div>
      <input
        type="text"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none"
        }
        placeholder="이메일을 입력해주세요"
      />
      <div className={"text-[#FF0000] ml-2"}>{ERROR_MESSAGE}</div>
    </div>
  );
};

const InputPassword = () => {
  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>비밀번호</div>
      <input
        type="password"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none"
        }
        placeholder="비밀번호를 입력해주세요"
      />
      <div className={"text-[#FF0000] ml-2"}>{ERROR_MESSAGE}</div>
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
