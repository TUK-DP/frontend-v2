import useFetchDiaryChecks from "./useFetchDiaryChecks";
import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";
import { dateToDashString, HOUR } from "../../../utils/api/dateConverter";
import { useCalendarStore } from "../../../stores/CalendarStore";

/**
 * @return {{diary: AxiosResponse<ApiResponse<Diary[]>>, isFetching: boolean, isDiaryExist: boolean, isCanRender: boolean}}
 */
const useFetchDiary = () => {
  const { selectedDate } = useCalendarStore((state) => state);
  const { isDiaryExist } = useFetchDiaryChecks();

  const {
    isFetching,
    isSuccess,
    data: diary,
  } = useQuery({
    queryKey: diaryQueryKey(selectedDate),
    queryFn: () =>
      DiaryController.findDiaryByUserIdAndDate(2, {
        date: dateToDashString(selectedDate),
      }),
    staleTime: 2 * HOUR,
    enabled: isDiaryExist,
  });

  const isCanRender = !isFetching && isSuccess;

  return { isFetching, isCanRender, diary, isDiaryExist };
};

export const diaryQueryKey = (selectedDate) => {
  return ["diary", selectedDate];
};

export default useFetchDiary;
