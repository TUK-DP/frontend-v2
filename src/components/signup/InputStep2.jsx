import React from "react";
import PurpleButton from "./PurpleButton";

import {
  GREATER_EQUAL_THAN,
  MATCH_PASSWORD,
  NOT_EMPTY,
  PASSWORD_FORMAT,
} from "../../utils/validator/input";
import { SignInOrUpInput } from "./SignInOrUpInput";
import { SIGH_UP_FORM_KEY } from "../../pages/auths/Signup";
import useSignUp from "../../hooks/auth/query/useSignUp";
import Spinner from "../Spinner";

const InputStep2 = ({
  signUpForm,
  handleChangeInput,
  isErrorExist,
  setIsErrorExist,
}) => {
  // 버튼 활성화 여부를 위한 변수
  const SIGN_UP_FORM_INPUT_LIST = [
    {
      name: "이름",
      type: "text",
      inputTagName: SIGH_UP_FORM_KEY.USERNAME,
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

  const { isMutating, mutate } = useSignUp();

  return (
    <div className={"h-full flex justify-center min-w-full overflow-y-scroll"}>
      <div
        className={"flex flex-col h-full justify-center items-center w-5/6 "}
      >
        <div className={"flex flex-col flex-1 justify-center w-full"}>
          {SIGN_UP_FORM_INPUT_LIST.map(({ inputTagName, ...props }, index) => {
            return (
              <SignInOrUpInput
                key={index}
                {...{ inputTagName, handleChangeInput, ...props }}
                value={signUpForm[inputTagName]}
                setIsError={(nextValid) => {
                  setIsErrorExist({
                    ...isErrorExist,
                    [inputTagName]: nextValid,
                  });
                }}
              />
            );
          })}
        </div>
        <PurpleButton
          text={isMutating ? <Spinner /> : "완료"}
          handleClickButton={() => {
            if (Object.values(isErrorExist).includes(true)) return;
            mutate(signUpForm);
          }}
        />
      </div>
    </div>
  );
};

export default InputStep2;
