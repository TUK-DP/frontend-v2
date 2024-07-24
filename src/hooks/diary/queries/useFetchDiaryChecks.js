import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";
import { HOUR, yearMonthToDashString } from "../../../utils/api/dateConverter";
import { useCalendarStore } from "../../../stores/CalendarStore";

/**
 * @return {{
 *    diaryChecks: AxiosResponse<ApiResponse<CheckDiaries>>,
 *    isFetching: boolean,
 *    isCanRender: boolean,
 *    isDiaryExistDay : (day : number) => boolean
 * }}
 */
const useFetchDiaryChecks = () => {
  let { selectedYearMonth } = useCalendarStore((state) => state);
  let {
    isFetching,
    isSuccess,
    data: diaryChecks,
  } = useQuery({
    queryKey: ["diaries", { ...selectedYearMonth }],
    queryFn: () =>
      DiaryController.findCheckDiaries({
        userId: 2,
        ...selectedYearMonth,
      }),
    staleTime: HOUR * 2,
  });

  const isCanRender = !isFetching && isSuccess;

  const isDiaryExistDay = (day) => {
    return diaryChecks?.data?.result?.[
      yearMonthToDashString({ ...selectedYearMonth, day })
    ]?.[day]?.isExist;
  };

  return {
    isFetching,
    isCanRender,
    diaryChecks,
    isDiaryExistDay,
  };
};

export default useFetchDiaryChecks;
