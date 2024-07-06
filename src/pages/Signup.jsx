import HeaderBar from "../components/HeaderBar";
import SignupStep from "../components/signup/SignupStep";
import InputStep1 from "../components/signup/InputStep1";
import InputStep2 from "../components/signup/InputStep2";
import SwipeWrapper from "../components/signup/SwipeWrapper";
import { useInput } from "../hooks/useInput";

export const SIGNUP_PAGE_PATH = "/signup";

export const SIGN_UP_FORM_EMAIL_KEY = "email";
export const SIGN_UP_FORM_PASSWORD_KEY = "password";
export const SIGN_UP_FORM_NAME_KEY = "name";
export const SIGN_UP_FORM_BIRTH_KEY = "birth";

const Signup = () => {
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    setDynamicHeight(window.innerHeight - UPPER_CONTAINER_HEIGHT);
  }, []);

  return (
    <>
      <HeaderBar />
      <SignupStep step={currentIndex + 1} />
      <SwipeWrapper
        maxIndex={MAX_INDEX}
        height={dynamicHeight}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        <InputStep1
          setCurrentIndex={setCurrentIndex}
          handleChangeInput={handleChangeInput}
        />
        <InputStep2
          signUpForm={signUpForm}
          handleChangeInput={handleChangeInput}
        />
      </SwipeWrapper>
    </>
  );
};

export default Signup;
