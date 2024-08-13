import { useCalendarStore } from "../../../stores/CalendarStore";
import {
  useIsMutating,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";
import { yearMonthToDashString } from "../../../utils/api/dateConverter";
import { diaryCheckQueryKey } from "../../diary/queries/useFetchDiaryChecks";
import useFetchDiary, {
  diaryQueryKey,
} from "../../diary/queries/useFetchDiary";

const useDeleteDiary = () => {
  const { selectedDate } = useCalendarStore(
    (state) => state
  );

  let queryClient = useQueryClient();
  const { diary } = useFetchDiary();

  const { mutate } = useMutation({
    mutationKey: ["diary", "delete", selectedDate],
    mutationFn: async (content) => {
      return await DiaryController.deleteDiary({
        diaryId: diary.diaryId,
      });
    },
    onMutate: async (content) => {
      queryClient.setQueryData(
        diaryCheckQueryKey(selectedDate),
        (old) => ({
          [yearMonthToDashString(selectedDate)]: {
            ...old[yearMonthToDashString(selectedDate)],
            [selectedDate.day]: { isExist: false },
          },
        })
      );

      await queryClient.invalidateQueries({
        queryKey: diaryQueryKey(selectedDate),
      });
    },
    onSuccess: async () => {
      // 일기 삭제 성공시
      await queryClient.invalidateQueries({
        queryKey: diaryQueryKey(selectedDate),
      });
    },
  });

  const isMutating = useIsMutating({
    mutationKey: ["diary", "delete", selectedDate],
  });

  return { mutate, isMutating: isMutating === 1 };
};

export default useDeleteDiary;
