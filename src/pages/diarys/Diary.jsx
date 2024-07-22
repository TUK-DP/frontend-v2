import { Calendar } from "../../components/calendar/Calendar";
import {
  BottomSheetLayout,
  MIDDLE_POSITION,
} from "../../layouts/BottomSheetLayout";
import { CalendarDetail } from "../../components/calendar_detail/CalendarDetail";
import { useState } from "react";
import { getNow } from "../../utils/calendar/date";

export const DIARY_PAGE_PATH = "/diary";

const Diary = () => {
  const [position, setPosition] = useState(MIDDLE_POSITION);
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

  // 날짜 선택 시, BottomSheet를 MIDDLE_POSITION으로 변경하고 선택된 날짜를 설정
  const setSelectedDateWithBottomSheet = (...args) => {
    setPosition(MIDDLE_POSITION);
    setSelectedDate(...args);
  };

  return (
    <>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDateWithBottomSheet}
        selectedYearMonth={selectedYearMonth}
        setSelectedYearMonth={setSelectedYearMonth}
      />
      <BottomSheetLayout position={position} setPosition={setPosition}>
        <CalendarDetail selectedDate={selectedDate} />
      </BottomSheetLayout>
    </>
  );
};

export default Diary;
