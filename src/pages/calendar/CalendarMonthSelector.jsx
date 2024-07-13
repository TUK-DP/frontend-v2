import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getNextYearMonth, getPreYearMonth } from "../../utils/calendar/date";

export const CalendarMonthSelector = ({
  selectedYearMonth,
  setSelectedYearMonth,
}) => {
  const goPreMonth = () => {
    setSelectedYearMonth((prev) =>
      getPreYearMonth({ year: prev.year, month: prev.month })
    );
  };

  const goNextMonth = () => {
    setSelectedYearMonth((prev) =>
      getNextYearMonth({ year: prev.year, month: prev.month })
    );
  };
  return (
    <div
      className={"flex w-full justify-around py-10 text-5xl mobile:text-3xl"}
    >
      <IoIosArrowBack
        size={50}
        className={"cursor-pointer"}
        onClick={goPreMonth}
      />
      <span
        className={"font-bold flex items-center"}
      >{`${selectedYearMonth.year}년 ${selectedYearMonth.month}월`}</span>
      <IoIosArrowForward
        size={50}
        className={"cursor-pointer"}
        onClick={goNextMonth}
      />
    </div>
  );
};
