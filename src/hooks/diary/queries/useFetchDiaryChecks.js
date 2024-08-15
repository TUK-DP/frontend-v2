import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";
import { HOUR, yearMonthToDashString } from "../../../utils/api/dateConverter";
import { useCalendarStore } from "../../../stores/CalendarStore";
import useRequireAuth from "../../auth/useRequireAuth";

/**
 * @return {{
 *    diaryChecks: CheckDiaries,
 *    isFetching: boolean,
 *    isCanRender: boolean,
 *    isDiaryExistDay : (day : number) => boolean
 *    isDiaryExist: boolean
 *    isDiaryImageExist: boolean
 * }}
 */
const useFetchDiaryChecks = () => {
  let { selectedDate } = useCalendarStore((state) => state);
  const { year, month } = selectedDate;
  const { userId, isLogin } = useRequireAuth();
  let {
    isFetching,
    isSuccess,
    data: diaryChecks,
  } = useQuery({
    queryKey: diaryCheckQueryKey({ year, month }),
    queryFn: async () => {
      const response = await DiaryController.findCheckDiaries({
        userId,
        year,
        month,
      });
      return response.data.result;
    },
    staleTime: HOUR * 2,
    enabled: isLogin,
  });

  const isCanRender = !isFetching && isSuccess;

  const isDiaryExistDay = (day) => {
    return diaryChecks?.[yearMonthToDashString({ year, month })]?.[day]
      ?.isExist;
  };

  const isDiaryExist = isDiaryExistDay(selectedDate.day);
  const isDiaryImageExist = diaryChecks?.[yearMonthToDashString({ year, month })]?.[selectedDate.day]?.imgExist;

  return {
    isFetching,
    isCanRender,
    diaryChecks,
    isDiaryExist,
    isDiaryImageExist,
    isDiaryExistDay,
  };
};

export const diaryCheckQueryKey = ({ year, month }) => {
  return ["diary", year, month];
};

export default useFetchDiaryChecks;
