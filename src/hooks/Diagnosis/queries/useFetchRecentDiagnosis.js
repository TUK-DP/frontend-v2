import { useQuery } from "@tanstack/react-query";
import DiagnosisController from "../../../apis/diagnosis.controller";
import useRequireAuth from "../../auth/useRequireAuth";

const useFetchRecentDiagnosis = () => {
  const { isLogin, userId } = useRequireAuth();
  const {
    isFetching,
    isSuccess,
    data: record,
  } = useQuery({
    queryKey: ["user", userId, "diagnosis"],
    queryFn: async () => {
      const response = await DiagnosisController.getRecentDiagnosis({ userId });
      return response.data.result;
    },
    enabled: isLogin,
  });

  return {
    record,
    isFetching,
    isSuccess,
    isCanRender: isSuccess && !isFetching,
  };
};

export default useFetchRecentDiagnosis;
