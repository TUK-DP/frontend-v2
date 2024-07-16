import { Calendar } from "../components/calendar/Calendar";
import {
  BottomSheetLayout,
  MIDDLE_POSITION,
} from "../layouts/BottomSheetLayout";
import { CalendarDetail } from "../components/calendar_detail/CalendarDetail";
import { useState } from "react";
import { getNow } from "../utils/calendar/date";

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

  return (
    <>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedYearMonth={selectedYearMonth}
        setSelectedYearMonth={setSelectedYearMonth}
      />
      <BottomSheetLayout position={position} setPosition={setPosition}>
        <CalendarDetail />
      </BottomSheetLayout>
    </>
  );
};

export default Diary;
