import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  getNextYearMonth,
  getNow,
  getPreYearMonth,
} from "../../utils/calendar/date";
import { useCalendarStore } from "../../stores/CalendarStore";
import { yearMonthToKoreanString } from "../../utils/api/dateConverter";

export const CalendarMonthSelector = () => {
  let { selectedDate, setSelectedDate } = useCalendarStore((state) => state);

  const { year: nextYear, month: nextMonth } = getNextYearMonth(selectedDate);
  const { year: nowYear, month: nowMonth } = getNow();
  const isCanGoNextMonth =
    nextYear < nowYear || (nextYear === nowYear && nextMonth <= nowMonth);

  const goPreMonth = () => {
    setSelectedDate({ ...getPreYearMonth(selectedDate), day: 1 });
  };

  const goNextMonth = () => {
    if (!isCanGoNextMonth) return;

    const { year: nextYear, month: nextMonth } = getNextYearMonth(selectedDate);

    setSelectedDate({ year: nextYear, month: nextMonth, day: 1 });
  };

  return (
    <div
      className={
        "flex w-full justify-around pb-10 text-5xl mobile:text-3xl mobile:pb-4"
      }
    >
      <IoIosArrowBack
        size={50}
        className={"cursor-pointer"}
        onClick={goPreMonth}
      />
      <span
        className={
          "font-bold flex justify-center items-center text-nowrap  w-0"
        }
      >
        {yearMonthToKoreanString(selectedDate)}
      </span>
      <IoIosArrowForward
        size={50}
        className={`cursor-pointer ${isCanGoNextMonth ? "" : "invisible"}`}
        onClick={goNextMonth}
      />
    </div>
  );
};
