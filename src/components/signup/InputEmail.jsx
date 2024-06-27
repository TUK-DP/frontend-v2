import React from "react";

const InputEmail = () => {
  const ERROR_MESSAGE = "* 올바르지 않는 이메일 형식입니다.";
  return (
    <div className="flex flex-col w-full">
      <div>이메일</div>
      <input
        type="text"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2"
        }
        placeholder="이메일을 입력해주세요"
      />
      {/* 오류메시지 */}
      <div className={"text-[#FF0000] ml-2"}>{ERROR_MESSAGE}</div>
    </div>
  );
};

export default InputEmail;
