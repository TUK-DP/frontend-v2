import { CalendarMonthSelector } from "./CalendarMonthSelector";
import { CalendarGrid } from "./CalendarGrid";
import { useCalendarStore } from "../../stores/CalendarStore";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Calendar = () => {
  const [searchParams, setQuery] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const { selectedDate, setSelectedDate } = useCalendarStore((state) => state);

  // 초기 선택된 날짜가 쿼리로 들어왔을 때
  useEffect(() => {
    const { year, month, day } = query;
    if (!year || !month || !day) return;

    setSelectedDate({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
    });
  }, []);

  // 날짜를 선택 할때 마다 쿼리를 변경
  useEffect(() => {
    setQuery(
      { ...selectedDate },
      {
        replace: true,
      }
    );
  }, [selectedDate]);

  return (
    <>
      <CalendarMonthSelector />
      <CalendarGrid />
    </>
  );
};
