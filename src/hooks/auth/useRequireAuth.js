import useUserStore from "../../stores/UserStore";
import { useNavigate } from "react-router-dom";
import { SIGNIN_PAGE_PATH } from "../../pages/auths/Signin";
import { useEffect } from "react";

const useRequireAuth = () => {
  const navigate = useNavigate();
  const { isLogin, userId } = useUserStore((state) => state);
  useEffect(() => {
    if (!isLogin || userId === 0) {
      navigate(SIGNIN_PAGE_PATH);
    }
  }, [isLogin, userId]);

  return { userId: isLogin ? userId : 0, isLogin };
};

export default useRequireAuth;
