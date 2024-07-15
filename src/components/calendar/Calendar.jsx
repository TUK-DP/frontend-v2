import { useState } from "react";
import { CalendarMonthSelector } from "./CalendarMonthSelector";
import { CalendarGrid } from "./CalendarGrid";
import { getCalendarDaysInMonth } from "../../utils/calendar/date";

export const Calendar = () => {
  const now = new Date();

  const [selectedYearMonth, setSelectedYearMonth] = useState({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  });

  const [selectedDate, setSelectedDate] = useState({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  });

  // 선택된 달의 길이가 42인 날짜 배열 => ["", "" ,1 , 2, ... , "" ]
  const days = getCalendarDaysInMonth({ ...selectedYearMonth });

  return (
    <>
      <CalendarMonthSelector
        selectedYearMonth={selectedYearMonth}
        setSelectedYearMonth={setSelectedYearMonth}
      />
      <CalendarGrid
        selectedYearMonth={selectedYearMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        days={days}
      />
    </>
  );
};
