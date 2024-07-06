import React, { useState } from "react";
import PurpleButton from "./PurpleButton";
import ErrorMessage from "./ErrorMessage";
import {
  GREATER_EQUAL_THAN,
  isValidate,
  MATCH_PASSWORD,
  NOT_EMPTY,
  PASSWORD_FORMAT,
} from "../../utils/validator/input";

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
        <div className={"flex flex-col flex-1 justify-center mb-10 w-full"}>
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
  const handleChangeInputName = (e) => {
    const name = e.target.value;

    const { isValid, errorMessage } = isValidate({
      value: name,
      should: [NOT_EMPTY, GREATER_EQUAL_THAN({ num: 2 })],
    });

    setIsErrorExist(!isValid);
    setErrorMessage(errorMessage);
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
        onChange={handleChangeInputName}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

const InputBirth = ({ setIsErrorExist }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleChangeInputBirth = (e) => {
    const birth = e.target.value;

    const { isValid, errorMessage } = isValidate({
      value: birth,
      should: [NOT_EMPTY, GREATER_EQUAL_THAN({ num: 2 })],
    });

    setIsErrorExist(!isValid);
    setErrorMessage(errorMessage);
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
        onChange={handleChangeInputBirth}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

const InputPassword = ({ setIsErrorExist, setPassword }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleChangeInputPassword = (e) => {
    const password = e.target.value;
    setPassword(password);

    const { isValid, errorMessage } = isValidate({
      value: password,
      should: [NOT_EMPTY, PASSWORD_FORMAT],
    });

    setIsErrorExist(!isValid);
    setErrorMessage(errorMessage);
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
        onChange={handleChangeInputPassword}
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

  const handleChangeInputCheckPassword = (e) => {
    const checkPassword = e.target.value;
    setCheckPassword(checkPassword); // 입력한 비밀번호 확인을 상태로 업데이트

    const { isValid, errorMessage } = isValidate({
      value: checkPassword,
      should: [MATCH_PASSWORD({ password })],
    });

    setIsErrorExist(!isValid);
    setErrorMessage(errorMessage);
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
        onChange={handleChangeInputCheckPassword}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};
