import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getNextYearMonth, getPreYearMonth } from "../../utils/calendar/date";
import { useCalendarStore } from "../../stores/CalendarStore";
import { yearMonthToKoreanString } from "../../utils/api/dateConverter";

export const CalendarMonthSelector = () => {
  let { selectedDate, setSelectedDate } = useCalendarStore((state) => state);

  const goPreMonth = () => {
    setSelectedDate({ ...getPreYearMonth(selectedDate), day: 1 });
  };

  const goNextMonth = () => {
    setSelectedDate({ ...getNextYearMonth(selectedDate), day: 1 });
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
        className={"cursor-pointer"}
        onClick={goNextMonth}
      />
    </div>
  );
};
