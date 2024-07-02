import React from "react";
import PurpleButton from "./PurpleButton";

const ERROR_MESSAGE = "* 올바르지 않는 이메일 형식입니다.";
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
  return (
    <div className={"flex flex-col justify-center mb-20 w-full flex-1"}>
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
