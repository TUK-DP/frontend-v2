// { regex, errorMessage } <- 컨벤션

// loginId는 6자 보다 길어야 한다.
export const LOGIN_ID_FORMAT = {
  regex: new RegExp(".{6,}"),
  errorMessage: "아이디는 6자 이상이어야 합니다.",
};

// export const EMAIL_FORMAT = {
//   regex: new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
//   errorMessage: "올바르지 않는 이메일 형식입니다.",
// };

export const PASSWORD_FORMAT = {
  regex: new RegExp(".{6,}"),
  errorMessage: "비밀번호는 6자 이상이어야 합니다.",
};

export const MATCH_PASSWORD = ({ password }) => ({
  regex: new RegExp(`^${password}$`),
  errorMessage: "비밀번호가 일치하지 않습니다.",
});

export const NOT_EMPTY = {
  regex: new RegExp(".+"),
  errorMessage: "필수 입력 항목입니다.",
};

export const GREATER_EQUAL_THAN = ({ num }) => ({
  regex: new RegExp(`.{${num},}`),
  errorMessage: `${num}글자 이상 입력해주세요.`,
});

export const isValidate = ({ value, should = [] }) => {
  const r = {
    isValid: true,
    errorMessage: "",
  };

  for (let { regex, errorMessage } of should) {
    if (!regex.test(value)) {
      r.isValid = false;
      r.errorMessage = errorMessage;
      return r;
    }
  }
  return r;
};
