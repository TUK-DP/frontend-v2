import UserController from "../../../apis/user.controller";
import {
  getUserInLocalStorage,
  removeUserInLocalStorage,
  setUserInLocalStorage,
} from "../../../utils/auth/localStorageController";
import { useQuery } from "@tanstack/react-query";
import userStore from "../../../stores/UserStore";

const useAutoLogin = () => {
  const preLocalStorageData = getUserInLocalStorage();
  const { setUserLogin } = userStore((state) => state);

  const { isFetching, isSuccess } = useQuery({
    queryKey: ["autoLogin"],
    queryFn: async () => {
      // 로그인 실패 시 로컬 스토리지에서 삭제
      removeUserInLocalStorage();

      const response = await UserController.autoLogin(preLocalStorageData);

      console.log("자동로그인 성공");

      const { user, token } = response.data.result;

      const userId = user.id;
      const { AccessToken, RefreshToken } = token;

      setUserLogin({ userId });

      // 로컬 스토리지에 저장
      setUserInLocalStorage({ userId, AccessToken, RefreshToken });
      return response.data.result;
    },
    retry: 0,
    staleTime: 0,
    gcTime: 0,
  });

  const isAutoLoginSuccess = isSuccess && !isFetching;

  return { isAutoLoginSuccess };
};

export default useAutoLogin;
