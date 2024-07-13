import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const CalendarMonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const goPreMonth = () => {
    setSelectedMonth((prev) => {
      let preYear = prev.month === 1 ? prev.year - 1 : prev.year;
      let preMonth = prev.month === 1 ? 12 : prev.month - 1;
      return { year: preYear, month: preMonth };
    });
  };

  const goNextMonth = () => {
    setSelectedMonth((prev) => {
      let nextYear = prev.month === 12 ? prev.year + 1 : prev.year;
      let nextMonth = prev.month === 12 ? 1 : prev.month + 1;
      return { year: nextYear, month: nextMonth };
    });
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
      >{`${selectedMonth.year}년 ${selectedMonth.month}월`}</span>
      <IoIosArrowForward
        size={50}
        className={"cursor-pointer"}
        onClick={goNextMonth}
      />
    </div>
  );
};
