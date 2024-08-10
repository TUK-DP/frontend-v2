import { Calendar } from "../../components/calendar/Calendar";
import {
  BOTTOM_POSITION,
  BottomSheetLayout,
  TOP_POSITION,
} from "../../layouts/BottomSheetLayout";
import { CalendarDetail } from "../../components/calendar_detail/CalendarDetail";
import { useEffect, useState } from "react";
import useFetchDiaryChecks from "../../hooks/diary/queries/useFetchDiaryChecks";
import NoDiary from "../../components/calendar/NoDiary";
import { useCalendarStore } from "../../stores/CalendarStore";

export const DIARY_PAGE_PATH = "/diary";

const Diary = () => {
  let { selectedDate } = useCalendarStore((state) => state);

  let { position, setPosition, isDiaryExistDay } = useBottomSheetPosition();

  return (
    <>
      <Calendar />
      <BottomSheetLayout {...{ position, setPosition }}>
        <CalendarDetail />
      </BottomSheetLayout>
      <NoDiary isExist={isDiaryExistDay(selectedDate.day)} />
    </>
  );
};

const useBottomSheetPosition = () => {
  let { selectedDate } = useCalendarStore((state) => state);

  const [position, setPosition] = useState(BOTTOM_POSITION);

  let { isDiaryExistDay } = useFetchDiaryChecks();

  // 선택된 날짜에 일기가 존재하는지 확인하여 BottomSheet 의 위치를 설정
  useEffect(() => {
    if (isDiaryExistDay(selectedDate.day)) {
      setPosition(TOP_POSITION);
      return;
    }
    setPosition(BOTTOM_POSITION);
  }, [selectedDate]);

  // 달이 변경되면 BottomSheet 의 위치를 초기화
  useEffect(() => {
    setPosition(BOTTOM_POSITION);
  }, [selectedDate.month]);

  return { position, setPosition, isDiaryExistDay };
};

export default Diary;
