import React, { useEffect, useState } from "react";
import PurpleButton from "./PurpleButton";
import Spinner from "../Spinner";
import { SignInOrUpInput } from "./SignInOrUpInput";
import { SIGH_UP_FORM_KEY } from "../../pages/auths/Signup";
import { LOGIN_ID_FORMAT, NOT_EMPTY } from "../../utils/validator/input";
import useSignUp from "../../hooks/auth/query/useSignUp";
import useCheckAccountId from "../../hooks/auth/query/useCheckAccountId";
import ErrorMessage from "./ErrorMessage";

const InputStep1 = ({
  signUpForm,
  handleChangeInput,
  goNextStep,
  isErrorExist,
  setIsErrorExist,
}) => {
  const { isMutating } = useSignUp();

  const {
    mutate,
    isMutating: isChecking,
    isRenderErrorMessage,
    message,
  } = useCheckAccountId(() => {
    setIsErrorExist({
      ...isErrorExist,
      duplicateCheck: false,
    });
    goNextStep();
  });

  const inputProps = {
    value: signUpForm[SIGH_UP_FORM_KEY.ACCOUNT_ID],
    inputTagName: SIGH_UP_FORM_KEY.ACCOUNT_ID,
    inputShould: [NOT_EMPTY, LOGIN_ID_FORMAT],
    setIsError: (nextValid) => {
      setIsErrorExist({
        ...isErrorExist,
        [SIGH_UP_FORM_KEY.ACCOUNT_ID]: nextValid,
      });
    },
    handleChangeInput,
  };

  return (
    <div className={"flex h-full justify-center "}>
      <div className="w-5/6 h-full flex flex-col justify-center items-center">
        <SignInOrUpInput name={"아이디"} className={"flex-1"} {...inputProps} />
        <PurpleButton
          text={isChecking || isMutating ? <Spinner /> : "중복확인"}
          handleClickButton={() => {
            if (isErrorExist.accountId) return;
            mutate({
              accountId: signUpForm[SIGH_UP_FORM_KEY.ACCOUNT_ID],
            });
          }}
        />
        {isRenderErrorMessage && <ErrorMessage errorMessage={message} />}
      </div>
    </div>
  );
};

export default InputStep1;
