import {
  useIsMutating,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { diaryCheckQueryKey } from "../../diary/queries/useFetchDiaryChecks";
import {
  dateToDashString,
  yearMonthToDashString,
} from "../../../utils/api/dateConverter";
import { diaryQueryKey } from "../../diary/queries/useFetchDiary";
import { useCalendarStore } from "../../../stores/CalendarStore";
import DiaryController from "../../../apis/diary.controller";
import useRequireAuth from "../../auth/useRequireAuth";

const useCreateDiary = () => {
  const { selectedDate } = useCalendarStore((state) => state);

  const { userId } = useRequireAuth();
  let queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["diary", "create", selectedDate],
    mutationFn: async (content) => {
      return await DiaryController.createDiary({
        userId,
        content,
        date: dateToDashString(selectedDate),
      });
    },
    onMutate: async (content) => {
      queryClient.setQueryData(diaryCheckQueryKey(selectedDate), (old) => ({
        [yearMonthToDashString(selectedDate)]: {
          ...old[yearMonthToDashString(selectedDate)],
          [selectedDate.day]: { isExist: true },
        },
      }));

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
