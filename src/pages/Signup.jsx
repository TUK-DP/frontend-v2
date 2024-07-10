import HeaderBar from "../components/HeaderBar";
import SignupSlider from "../components/signup/SignupSlider";
import { useInput } from "../hooks/useInput";

export const SIGNUP_PAGE_PATH = "/signup";

export const SIGN_UP_FORM_EMAIL_KEY = "email";
export const SIGN_UP_FORM_PASSWORD_KEY = "password";
export const SIGN_UP_FORM_NAME_KEY = "name";
export const SIGN_UP_FORM_BIRTH_KEY = "birth";

const Signup = () => {
  const {
    form: signUpForm,
    setForm: setSignUpForm,
    handleChangeInput,
  } = useInput({
    [SIGN_UP_FORM_EMAIL_KEY]: "",
    [SIGN_UP_FORM_PASSWORD_KEY]: "",
    [SIGN_UP_FORM_NAME_KEY]: "",
    [SIGN_UP_FORM_BIRTH_KEY]: "",
  });

  return (
    <>
      <HeaderBar />
      <SignupSlider
        signUpForm={signUpForm}
        handleChangeInput={handleChangeInput}
      />
    </>
  );
};

export default Signup;
