import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";
import { HOUR, yearMonthToDashString } from "../../../utils/api/dateConverter";

/**
 * @return {{diaryChecks: AxiosResponse<ApiResponse<CheckDiaries>>, isFetching: boolean, isCanRender: boolean, isDiaryExist : boolean}}
 */
const useFetchDiaryChecks = ({ selectedYearMonth, day }) => {
  let {
    isFetching,
    isSuccess,
    data: diaryChecks,
  } = useQuery({
    queryKey: [
      "diaries",
      { year: selectedYearMonth.year, month: selectedYearMonth.month },
    ],
    queryFn: () =>
      DiaryController.findCheckDiaries({
        userId: 2,
        year: selectedYearMonth.year,
        month: selectedYearMonth.month,
      }),
    staleTime: HOUR * 2,
  });

  const isCanRender = !isFetching && isSuccess;

  const isDiaryExist =
    day !== "" &&
    isCanRender &&
    diaryChecks.data.result[yearMonthToDashString({ ...selectedYearMonth })][
      day
    ].isExist;

  return {
    isFetching,
    isCanRender,
    diaryChecks,
    isDiaryExist,
  };
};

export default useFetchDiaryChecks;
