import HeaderBar from "../components/HeaderBar";
import SignupSlider from "../components/signup/SignupSlider";

export const SIGNUP_PAGE_PATH = "/signup";

const Signup = () => {
  return (
    <>
      <HeaderBar />
      <SignupSlider />
    </>
  );
};

export default Signup;
