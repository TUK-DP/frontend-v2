import { useIsMutating, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { SIGNIN_PAGE_PATH } from "../../../pages/auths/Signin";
import UserController from "../../../apis/user.controller";

const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate, data: userId } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: async ({ accountId, password, username }) => {
      const response = await UserController.signUp({
        accountId,
        password,
        username,
      });
      return response.data.result.id;
    },
    onSuccess: () => {
      navigate(SIGNIN_PAGE_PATH);
    },
  });

  const isMutating = useIsMutating({ mutationKey: ["signUp"] });

  return { isMutating: isMutating === 1, mutate, userId };
};

export default useSignUp;
