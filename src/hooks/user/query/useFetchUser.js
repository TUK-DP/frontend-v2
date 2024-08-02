import useRequireAuth from "../../auth/useRequireAuth";
import { useQuery } from "@tanstack/react-query";
import UserController from "../../../apis/user.controller";
import {
  ACCESS_TOKEN,
  getUserInLocalStorage,
  REFRESH_TOKEN,
} from "../../../utils/auth/localStorageController";
import { HOUR } from "../../../utils/api/dateConverter";

/**
 * @return {{isFetching: boolean, user: User, isSuccess: boolean, isCanRender: boolean}}
 */
const useFetchUser = () => {
  const { userId, isLogin } = useRequireAuth();
  const userStorage = getUserInLocalStorage();

  const {
    isFetching,
    isSuccess,
    data: user,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await UserController.getUser({
        userId,
        accessToken: userStorage[ACCESS_TOKEN],
        refreshToken: userStorage[REFRESH_TOKEN],
      });

      return response.data.result;
    },
    staleTime: 2 * HOUR,
    enabled: isLogin,
  });

  return { isFetching, isSuccess, user, isCanRender: isSuccess && !isFetching };
};

export default useFetchUser;
