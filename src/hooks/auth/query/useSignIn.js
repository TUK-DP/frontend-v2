import { useIsMutating, useMutation } from "@tanstack/react-query";
import UserController from "../../../apis/user.controller";
import useUserStore from "../../../stores/UserStore";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_PATH } from "../../../pages/Home";
import { setUserInLocalStorage } from "../../../utils/auth/localStorageController";

const useSignIn = () => {
  let navigate = useNavigate();
  const { setUserLogin, isLogin, userId } = useUserStore((state) => state);

  const { mutate, data } = useMutation({
    mutationKey: ["signIn"],
    mutationFn: async ({ accountId, password }) => {
      const response = await UserController.signIn({ accountId, password });
      return response.data.result;
    },

    /**
     * @param data {LoginResponse}
     */
    onSuccess: (data) => {
      const userId = data.user.id;
      const { AccessToken, RefreshToken } = data.token;
      setUserLogin({ userId: data?.user?.id });
      navigate(HOME_PAGE_PATH);
      setUserInLocalStorage({ userId, AccessToken, RefreshToken });
    },
  });

  const isMutating = useIsMutating({ mutationKey: ["signIn"] });

  return {
    isMutating: isMutating === 1,
    mutate,
    signInResponse: data,
    isLogin,
    userId,
  };
};

export default useSignIn;
