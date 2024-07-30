import DiagnosisController from "../../../apis/diagnosis.controller";
import { useQuery } from "@tanstack/react-query";

const useGetDiagnosisQuiz = () => {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: "diagnosisQuiz",
    queryFn: async () => {
      const res = await DiagnosisController.getDiagnosis();
      return res.data.result;
    },
  });
  const diagnosisQuiz = data || [];

  return { diagnosisQuiz, isFetching, isSuccess };
};
export default useGetDiagnosisQuiz;
