import useUserStore from "../../stores/UserStore";
import { useNavigate } from "react-router-dom";
import { SIGNIN_PAGE_PATH } from "../../pages/auths/Signin";
import { useEffect } from "react";
import useAutoLogin from "./query/useAutoLogin";

const useRequireAuth = () => {
  const { isAutoLoginSuccess, isLoggingIn } = useAutoLogin();
  const navigate = useNavigate();
  const { isLogin, userId } = useUserStore((state) => state);
  useEffect(() => {
    if (isLoggingIn) return;

    if (!isLogin || userId === 0 || !isAutoLoginSuccess) {
      navigate(SIGNIN_PAGE_PATH);
    }
  }, [isAutoLoginSuccess, isLoggingIn, isLogin, userId]);

  return {
    userId: isLogin ? userId : 0,
    isLogin,
    isLoggingIn,
    isAutoLoginSuccess,
  };
};

export default useRequireAuth;
