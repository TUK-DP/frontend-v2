import React, { useState } from "react";
import PurpleButton from "./PurpleButton";

import {
  GREATER_EQUAL_THAN,
  MATCH_PASSWORD,
  NOT_EMPTY,
  PASSWORD_FORMAT,
} from "../../utils/validator/input";
import { SignInOrUpInput } from "./SignInOrUpInput";
import { SIGH_UP_FORM_KEY } from "../../pages/auths/Signup";

const InputStep2 = ({ signUpForm, handleChangeInput }) => {
  // 버튼 활성화 여부를 위한 변수
  const [isErrorExist, setIsErrorExist] = useState(false);

  const SIGN_UP_FORM_INPUT_LIST = [
    {
      name: "이름",
      type: "text",
      inputTagName: SIGH_UP_FORM_KEY.NAME,
      inputShould: [NOT_EMPTY, GREATER_EQUAL_THAN({ num: 2 })],
    },
    {
      name: "비밀번호",
      type: "password",
      inputTagName: SIGH_UP_FORM_KEY.PASSWORD,
      inputShould: [NOT_EMPTY, PASSWORD_FORMAT],
    },
    {
      name: "비밀번호 확인",
      type: "password",
      inputTagName: "checkPassword",
      inputShould: [
        MATCH_PASSWORD({ password: signUpForm[SIGH_UP_FORM_KEY.PASSWORD] }),
      ],
    },
  ];

  return (
    <div className={"h-full flex justify-center min-w-full overflow-y-scroll"}>
      <div
        className={"flex flex-col h-full justify-center items-center w-5/6 "}
      >
        <div className={"flex flex-col flex-1 justify-center w-full"}>
          x{" "}
          {SIGN_UP_FORM_INPUT_LIST.map(({ inputTagName, ...props }, index) => {
            return (
              <SignInOrUpInput
                key={index}
                {...{ inputTagName, handleChangeInput, ...props }}
                value={signUpForm[inputTagName]}
                setIsError={setIsErrorExist}
              />
            );
          })}
        </div>
        <PurpleButton text="완료" />
      </div>
    </div>
  );
};

export default InputStep2;
