import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";
import { HOUR, yearMonthToDashString } from "../../../utils/api/dateConverter";
import { useCalendarStore } from "../../../stores/CalendarStore";

/**
 * @return {{
 *    diaryChecks: CheckDiaries,
 *    isFetching: boolean,
 *    isCanRender: boolean,
 *    isDiaryExistDay : (day : number) => boolean
 *    isDiaryExist: boolean
 * }}
 */
const useFetchDiaryChecks = () => {
  let { selectedDate, selectedYearMonth } = useCalendarStore((state) => state);
  let {
    isFetching,
    isSuccess,
    data: diaryChecks,
  } = useQuery({
    queryKey: diaryCheckQueryKey(selectedYearMonth),
    queryFn: async () => {
      const response = await DiaryController.findCheckDiaries({
        userId: 2,
        ...selectedYearMonth,
      });
      return response.data.result;
    },
    staleTime: HOUR * 2,
  });

  const isCanRender = !isFetching && isSuccess;

  const isDiaryExistDay = (day) => {
    return diaryChecks?.[yearMonthToDashString({ ...selectedYearMonth })]?.[day]
      ?.isExist;
  };

  const isDiaryExist = isDiaryExistDay(selectedDate.day);

  return {
    isFetching,
    isCanRender,
    diaryChecks,
    isDiaryExist,
    isDiaryExistDay,
  };
};

export const diaryCheckQueryKey = (selectedYearMonth) => {
  return ["diary", "check", selectedYearMonth];
};

export default useFetchDiaryChecks;
