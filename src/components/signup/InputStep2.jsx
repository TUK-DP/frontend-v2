import React, { useState } from "react";
import PurpleButton from "./PurpleButton";
import ErrorMessage from "./ErrorMessage";
import SignupStep from "./SignupStep";
import Signup from "../../pages/Signup";

const validate = [
  { name: "notEmpty", regex: /.+/, errorMessage: "필수 입력 항목입니다." },

  { name: "isName", regex: /.{2,}/, errorMessage: "2글자 이상 입력해주세요." },
  {
    name: "isPassword",
    regex: /.{6,}/,
    errorMessage: "비밀번호는 6자 이상이어야 합니다.",
  },
];

const InputStep2 = () => {
  // 버튼 활성화 여부를 위한 변수
  const [isErrorExist, setIsErrorExist] = useState(false);
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <div className={"h-full flex justify-center min-w-full overflow-y-scroll"}>
      <div
        className={
          "flex flex-col h-full justify-center items-center pb-20 w-5/6 "
        }
      >
        <SignupStep step="2" />

        <div className={"flex flex-col flex-1 justify-center py-10 w-full"}>
          <InputName setIsErrorExist={setIsErrorExist} />
          <InputBirth setIsErrorExist={setIsErrorExist} />
          <InputPassword
            setIsErrorExist={setIsErrorExist}
            setPassword={setPassword}
          />
          <InputCheckPassword
            setIsErrorExist={setIsErrorExist}
            password={password}
            setCheckPassword={setCheckPassword}
          />
        </div>
        <PurpleButton text="완료" />
      </div>
    </div>
  );
};

export default InputStep2;

const InputName = ({ setIsErrorExist }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const validateName = (name) => {
    const isNameValidation = validate.find((item) => item.name === "isName");
    const isEmptyValidation = validate.find((item) => item.name == "notEmpty");

    if (!isEmptyValidation.regex.test(name)) {
      setErrorMessage(isEmptyValidation.errorMessage);
      setIsErrorExist(true);
      return;
    } else if (!isNameValidation.regex.test(name)) {
      setErrorMessage(isNameValidation.errorMessage);
      setIsErrorExist(true);
      return;
    }
    setErrorMessage("");
    setIsErrorExist(false);
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

const InputBirth = ({ setIsErrorExist }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const validateBirth = (birth) => {
    const isBirthValidation = validate.find((item) => item.name === "notEmpty");
    if (!isBirthValidation.regex.test(birth)) {
      setErrorMessage(isBirthValidation.errorMessage);
      setIsErrorExist(true);
      return;
    }
    setErrorMessage("");
    setIsErrorExist(false);
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

const InputPassword = ({ setIsErrorExist, setPassword }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const validatePassword = (password) => {
    const isPasswordValidation = validate.find(
      (item) => item.name === "isPassword"
    );
    const isEmptyValidation = validate.find((item) => item.name == "notEmpty");
    if (!isEmptyValidation.regex.test(password)) {
      setErrorMessage(isEmptyValidation.errorMessage);
      setIsErrorExist(true);
      return;
    } else if (!isPasswordValidation.regex.test(password)) {
      setErrorMessage(isPasswordValidation.errorMessage);
      setIsErrorExist(true);
      return;
    }
    setPassword(password);
    setErrorMessage("");
    setIsErrorExist(false);
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

const InputCheckPassword = ({
  setIsErrorExist,
  password,
  setCheckPassword,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validatePasswordMatch = (checkPassword) => {
    setCheckPassword(checkPassword); // 입력한 비밀번호 확인을 상태로 업데이트

    if (checkPassword !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      setIsErrorExist(true);
    } else {
      setErrorMessage("");
      setIsErrorExist(false);
    }
  };

  return (
    <div className={"flex flex-col justify-center"}>
      <div>비밀번호 확인</div>
      <input
        type="password"
        className={
          "w-full h-11 border border-secondary-600 rounded-lg-xl text-xl px-4 my-2 outline-none sm:h-16"
        }
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => validatePasswordMatch(e.target.value)}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};
