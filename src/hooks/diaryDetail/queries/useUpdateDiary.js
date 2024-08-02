import { useCalendarStore } from "../../../stores/CalendarStore";
import {
  useIsMutating,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { delay } from "../../../utils/api/delay";
import DiaryController from "../../../apis/diary.controller";
import { yearMonthToDashString } from "../../../utils/api/dateConverter";
import { diaryCheckQueryKey } from "../../diary/queries/useFetchDiaryChecks";
import useFetchDiary, {
  diaryQueryKey,
} from "../../diary/queries/useFetchDiary";
import useRequireAuth from "../../auth/useRequireAuth";

const useUpdateDiary = () => {
  const { selectedDate, selectedYearMonth } = useCalendarStore(
    (state) => state
  );

  let queryClient = useQueryClient();

  let { diary } = useFetchDiary();
  const { userId } = useRequireAuth();

  const { mutate } = useMutation({
    mutationKey: ["diary", "update", selectedDate],
    mutationFn: async (content) => {
      return await DiaryController.updateDiary({
        userId: userId,
        diaryId: diary.diaryId,
        content,
      });
    },
    onMutate: async (content) => {
      queryClient.setQueryData(
        diaryCheckQueryKey(selectedYearMonth),
        (old) => ({
          [yearMonthToDashString(selectedYearMonth)]: {
            ...old[yearMonthToDashString(selectedYearMonth)],
            [selectedDate.day]: { isExist: true },
          },
        })
      );

      queryClient.setQueryData(diaryQueryKey(selectedDate), (old) => ({
        ...old,
        content,
        keywords: [],
      }));
    },
    onSuccess: async () => {
      // 일기 저장 성공시
      await queryClient.invalidateQueries({
        queryKey: diaryQueryKey(selectedDate).slice(0, -1),
      });
    },
  });

  const isMutating = useIsMutating({
    mutationKey: ["diary", "update", selectedDate],
  });

  return { mutate, isMutating: isMutating === 1 };
};

export default useUpdateDiary;
