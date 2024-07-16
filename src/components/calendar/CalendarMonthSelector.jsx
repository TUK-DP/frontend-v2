import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getNextYearMonth, getPreYearMonth } from "../../utils/calendar/date";

export const CalendarMonthSelector = ({
  selectedYearMonth,
  setSelectedYearMonth,
}) => {
  let { year, month } = selectedYearMonth;

  const goPreMonth = () => {
    setSelectedYearMonth((prev) => getPreYearMonth({ ...prev }));
  };

  const goNextMonth = () => {
    setSelectedYearMonth((prev) => getNextYearMonth({ ...prev }));
  };
  return (
    <div
      className={"flex w-full justify-around pb-10 text-5xl mobile:text-3xl"}
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
      >{`${year}년 ${month}월`}</span>
      <IoIosArrowForward
        size={50}
        className={"cursor-pointer"}
        onClick={goNextMonth}
      />
    </div>
  );
};
