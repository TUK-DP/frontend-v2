import React, { useState } from "react";
import PurpleButton from "./PurpleButton";
import ErrorMessage from "./ErrorMessage";

const ERROR_MESSAGE = {
  EMPTY_ERROR: "필수 입력 항목입니다.",
  INVALID_NAME: "2글자 이상 입력해주세요.",
  INVALID_PASSWORD: "비밀번호는 6자 이상이어야 합니다.",
  PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다.",
};

const InputStep2 = () => {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    if (newPassword === "") {
      setPasswordError(ERROR_MESSAGE.EMPTY_ERROR);
    } else if (newPassword.length < 6) {
      setPasswordError(ERROR_MESSAGE.INVALID_PASSWORD);
    } else {
      setPasswordError("");
    }
  };

  const handleCheckPasswordChange = (newCheckPassword) => {
    setCheckPassword(newCheckPassword);
    if (newCheckPassword === "") {
      setCheckPasswordError(ERROR_MESSAGE.EMPTY_ERROR);
    } else if (newCheckPassword !== password) {
      setCheckPasswordError(ERROR_MESSAGE.PASSWORD_MISMATCH);
    } else {
      setCheckPasswordError("");
    }
  };

  return (
    <div className={"h-full flex justify-center min-w-full overflow-y-scroll"}>
      <div
        className={
          "flex flex-col h-full justify-center items-center pb-20 w-5/6 "
        }
      >
        <div className={"flex flex-col flex-1 justify-center mb-10 w-full"}>
          <InputName />
          <InputBirth />
          <InputPassword
            password={password}
            onPasswordChange={handlePasswordChange}
            errorMessage={passwordError}
          />
          <InputCheckPassword
            checkPassword={checkPassword}
            onCheckPasswordChange={handleCheckPasswordChange}
            errorMessage={checkPasswordError}
          />
        </div>
        <PurpleButton text="완료" />
      </div>
    </div>
  );
};

export default InputStep2;

const InputName = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const validateName = (name) => {
    if (name === "") {
      setErrorMessage(ERROR_MESSAGE.EMPTY_ERROR);
    } else {
      setErrorMessage("");
    }
  };
  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>이름</div>
      <input
        type="text"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder="이름을 입력해주세요"
        onChange={(e) => validateName(e.target.value)}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

const InputBirth = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const validateBirth = (birth) => {
    if (birth === "") {
      setErrorMessage(ERROR_MESSAGE.EMPTY_ERROR);
    } else {
      setErrorMessage("");
    }
  };
  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>생년월일</div>
      <input
        type="date"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder="생년월일을 입력해주세요"
        onChange={(e) => validateBirth(e.target.value)}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

const InputPassword = ({ password, onPasswordChange, errorMessage }) => {
  return (
    <div className={"flex flex-col justify-center mb-4"}>
      <div>비밀번호</div>
      <input
        type="password"
        value={password}
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

const InputCheckPassword = ({
  checkPassword,
  onCheckPasswordChange,
  errorMessage,
}) => {
  return (
    <div className={"flex flex-col justify-center"}>
      <div>비밀번호 확인</div>
      <input
        type="password"
        value={checkPassword}
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => onCheckPasswordChange(e.target.value)}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};
