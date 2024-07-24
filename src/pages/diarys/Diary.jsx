import { Calendar } from "../../components/calendar/Calendar";
import {
  BOTTOM_POSITION,
  BottomSheetLayout,
  TOP_POSITION,
} from "../../layouts/BottomSheetLayout";
import { CalendarDetail } from "../../components/calendar_detail/CalendarDetail";
import { useEffect, useState } from "react";
import { getNow } from "../../utils/calendar/date";
import useFetchDiaryChecks from "../../hooks/diary/queries/useFetchDiaryChecks";
import NoDiary from "../../components/calendar/NoDiary";

export const DIARY_PAGE_PATH = "/diary";

const Diary = () => {
  const { year, month, day } = getNow();

  const [selectedYearMonth, setSelectedYearMonth] = useState({
    year,
    month,
  });

  const [selectedDate, setSelectedDate] = useState({
    year,
    month,
    day,
  });

  let { position, setPosition, isDiaryExistDay } = useBottomSheetPosition({
    selectedYearMonth,
    selectedDate,
  });

  return (
    <>
      <Calendar
        {...{
          selectedDate,
          setSelectedDate,
          selectedYearMonth,
          setSelectedYearMonth,
        }}
      />
      <BottomSheetLayout {...{ position, setPosition }}>
        <CalendarDetail selectedDate={selectedDate} />
      </BottomSheetLayout>
      <NoDiary isExist={isDiaryExistDay(selectedDate.day)} />
    </>
  );
};

const useBottomSheetPosition = ({ selectedDate, selectedYearMonth }) => {
  const [position, setPosition] = useState(BOTTOM_POSITION);

  let { isDiaryExistDay } = useFetchDiaryChecks({
    selectedYearMonth,
    day: selectedDate.day,
  });

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
  }, [selectedYearMonth]);

  return { position, setPosition, isDiaryExistDay };
};

export default Diary;
