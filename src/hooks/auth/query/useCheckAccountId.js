import { useIsMutating, useMutation } from "@tanstack/react-query";
import UserController from "../../../apis/user.controller";

const useCheckAccountId = (onSuccess) => {
  const { mutate, isSuccess, isError } = useMutation({
    mutationKey: ["checkAccountId"],
    mutationFn: async ({ accountId }) => {
      const response = await UserController.checkAccountId({ accountId });
      return response.data.result;
    },
    onSuccess: () => {
      console.log("onSuccess");
      onSuccess();
    },
  });

  const isMutating = useIsMutating({ mutationKey: ["checkAccountId"] }) === 1;
  const isRenderErrorMessage = isError && !isMutating;

  return {
    mutate,
    isSuccess,
    isMutating,
    isRenderErrorMessage,
    message: isRenderErrorMessage ? "이미 사용중인 아이디 입니다." : "",
  };
};

export default useCheckAccountId;
