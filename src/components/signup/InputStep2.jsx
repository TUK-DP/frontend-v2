import React from "react";
import PurpleButton from "./PurpleButton";

const ERROR_MESSAGE = "* 올바르지 않는 이메일 형식입니다.";
const InputStep2 = () => {
  return (
    <div className={"h-full flex justify-center min-w-full"}>
      <div className={"flex flex-col  h-full justify-center pb-20 w-5/6"}>
        <div className={"flex flex-col flex-1 justify-center mb-10"}>
          <InputName />
          <InputBirth />
          <InputPassword />
          <InputCheckPassword />
        </div>
        <PurpleButton text="완료" />
      </div>
    </div>
  );
};

export default InputStep2;

const InputName = () => {
  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>이름</div>
      <input
        type="text"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none"
        }
        placeholder="이름을 입력해주세요"
      />
      <div className={"text-[#FF0000] ml-2"}>{ERROR_MESSAGE}</div>
    </div>
  );
};
const InputBirth = () => {
  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>생년월일</div>
      <input
        type="text"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none"
        }
        placeholder="생년월일을 입력해주세요"
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
const InputCheckPassword = () => {
  return (
    <div className={"flex flex-col justify-center"}>
      <div>비밀번호 확인</div>
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
