import useFetchDiaryChecks from "./useFetchDiaryChecks";
import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";
import { dateToDashString, HOUR } from "../../../utils/api/dateConverter";

/**
 * @return {{diary: AxiosResponse<ApiResponse<Diary[]>>, isFetching: boolean, isDiaryExist: boolean, isCanRender: boolean}}
 */
const useFetchDiary = ({ selectedDate }) => {
  const { isDiaryExist } = useFetchDiaryChecks({
    selectedYearMonth: { ...selectedDate },
    day: selectedDate.day,
  });

  const {
    isFetching,
    isSuccess,
    data: diary,
  } = useQuery({
    queryKey: ["diary", selectedDate],
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

export default useFetchDiary;
