import { useQuery } from "@tanstack/react-query";
import DiaryRecallController from "../../../apis/diary.recall.controller";
import useFetchDiary from "./useFetchDiary";

const useFetchDiaryRecallQuiz = () => {
  const { diary } = useFetchDiary();
  const { diaryId } = diary;
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["diaryRecallQuiz", diaryId],
    queryFn: async () => {
      const res = await DiaryRecallController.quiz({ diaryId: diaryId });
      return res.data.result;
    },
  });
  const quizData = data || [];

  return { quizData, isFetching, isSuccess };
};

export default useFetchDiaryRecallQuiz;
