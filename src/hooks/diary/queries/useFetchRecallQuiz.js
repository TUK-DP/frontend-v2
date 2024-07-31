import { useQuery } from "@tanstack/react-query";
import DiaryRecallController from "../../../apis/diary.recall.controller";
const useFetchDiaryRecallQuiz = (diaryId) => {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["diaryRecallQuiz", diaryId],
    queryFn: async () => {
      //TODO: diaryId 바꿔야 함
      const res = await DiaryRecallController.quiz({ diaryId: 196 });
      return res.data.result;
    },
  });
  const quizData = data || [];

  return { quizData, isFetching, isSuccess };
};

export default useFetchDiaryRecallQuiz;
