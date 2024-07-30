import DiagnosisController from "../../../apis/diagnosis.controller";
import { useQuery } from "@tanstack/react-query";

const useGetDiagnosisQuiz = () => {
  const {
    data: diagnosisQuiz,
    isFetching,
    isSuccess,
  } = useQuery({
    qureyKey: "diagnosisQuiz",
    queryFn: async () => {
      const res = await DiagnosisController.getDiagnosis();
      return res.data.result;
    },
  });
  return { diagnosisQuiz, isFetching, isSuccess };
};
export default useGetDiagnosisQuiz;
