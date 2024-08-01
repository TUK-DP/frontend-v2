import userStore from "../../../stores/UserStore";
import { useQuery } from "@tanstack/react-query";
import DiagnosisController from "../../../apis/diagnosis.controller";

const useFetchRecentDiagnosis = () => {
  const { isLogin, userId } = userStore((state) => state);
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
