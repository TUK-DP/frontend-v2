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
import useFetchDiary, {
  diaryQueryKey,
} from "../../diary/queries/useFetchDiary";
import { useCalendarStore } from "../../../stores/CalendarStore";
import DiaryController from "../../../apis/diary.controller";

const useCreateDiary = () => {
  const { selectedDate, selectedYearMonth } = useCalendarStore(
    (state) => state
  );
  let { isDiaryExist } = useFetchDiary();

  let queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["diary", selectedDate],
    mutationFn: async (content) => {
      await delay(6000);
      return await DiaryController.createDiary({
        userId: 2,
        content,
        date: dateToDashString(selectedDate),
      });
    },
    onMutate: async (content) => {
      console.log(content);
      // 일기 저장 전에 일기가 있는지 확인
      if (isDiaryExist) return;

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
    mutationKey: ["diary", selectedDate],
  });

  return { mutate, isMutating: isMutating === 1 };
};
export default useCreateDiary;
