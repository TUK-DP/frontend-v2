import useFetchDiaryChecks from "./useFetchDiaryChecks";
import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";
import { dateToDashString, HOUR } from "../../../utils/api/dateConverter";
import { useCalendarStore } from "../../../stores/CalendarStore";
import useRequireAuth from "../../auth/useRequireAuth";
import { useEffect } from "react";

/**
 * @return {{diary: Diary, isFetching: boolean, isDiaryExist: boolean, isCanRender: boolean}}
 */
const useFetchDiary = () => {
  const { selectedDate } = useCalendarStore((state) => state);
  const { isDiaryExist } = useFetchDiaryChecks();
  const { userId, isLogin } = useRequireAuth();

  const {
    isFetching,
    isSuccess,
    data: diary,
    refetch,
  } = useQuery({
    queryKey: diaryQueryKey(selectedDate),
    queryFn: async () => {
      const response = await DiaryController.findDiaryByUserIdAndDate(userId, {
        date: dateToDashString(selectedDate),
      });
      return response.data.result[0];
    },
    staleTime: 2 * HOUR,
    enabled: isLogin && isDiaryExist,
  });

  const isCanRender = !isFetching && isSuccess;

  return { isFetching, isCanRender, diary, isDiaryExist, refetch };
};

export const diaryQueryKey = (selectedDate) => {
  const { year, month, day } = selectedDate;
  return ["diary", year, month, day];
};

export default useFetchDiary;
