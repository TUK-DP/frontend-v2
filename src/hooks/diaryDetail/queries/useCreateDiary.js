import {
  useIsMutating,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { delay } from "../../../utils/api/delay";
import { diaryCheckQueryKey } from "../../diary/queries/useFetchDiaryChecks";
import {
  dateToDashString,
  yearMonthToDashString,
} from "../../../utils/api/dateConverter";
import { diaryQueryKey } from "../../diary/queries/useFetchDiary";
import { useCalendarStore } from "../../../stores/CalendarStore";
import DiaryController from "../../../apis/diary.controller";

const useCreateDiary = () => {
  const { selectedDate, selectedYearMonth } = useCalendarStore(
    (state) => state
  );

  let queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["diary", "create", selectedDate],
    mutationFn: async (content) => {
      return await DiaryController.createDiary({
        userId: 2,
        content,
        date: dateToDashString(selectedDate),
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
    mutationKey: ["diary", "create", selectedDate],
  });

  return { mutate, isMutating: isMutating === 1 };
};
export default useCreateDiary;
