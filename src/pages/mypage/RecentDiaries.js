import React from "react";

export const RECENT_DIARIES_PAGE_PATH = "/recentdiaries";

const RecentDiaries = () => {
  const MonthlyDiaryData = [
    {
      year: 2024,
      months: [
        {
          month: 7,
          records: [
            { date: "2024-07-17" },
            { date: "2024-07-09" },
            { date: "2024-07-02" },
          ],
        },
        {
          month: 6,
          records: [
            { date: "2024-06-24" },
            { date: "2024-06-18" },
            { date: "2024-06-15" },
          ],
        },
      ],
    },
    {
      year: 2023,
      months: [
        {
          month: 12,
          records: [
            { date: "2023-12-16" },
            { date: "2023-12-08" },
            { date: "2023-12-04" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <MonthlyDiaryList data={MonthlyDiaryData} />
    </div>
  );
};

export default RecentDiaries;

const MonthlyDiaryList = ({ data }) => {
  return (
    <div className="ml-10 md:ml-20 pb-6">
      {data.map((yearData) =>
        yearData.months.map((monthData) => (
          <div
            key={`${yearData.year}-${monthData.month}`}
            className="my-8 md:my-16"
          >
            <MonthlyTitle year={yearData.year} month={monthData.month} />
            {monthData.records.map((record, index) => (
              <DiaryItem key={index} date={record.date} />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

const MonthlyTitle = ({ year, month }) => {
  return (
    <div className="flex items-center text-2xl md:text-4xl text-[#5B5B5B] font-bold">
      <p>
        {year}년 {month.toString().padStart(2, "0")}월
      </p>
      <div className="flex-1 h-1 bg-[#5B5B5B] ml-2"></div>
    </div>
  );
};

const DiaryItem = ({ date }) => {
  return (
    <div className="text-xl md:text-3xl my-9 flex justify-between pr-5">
      {formatDate(date)}
      <button>확인하기 {">"} </button>
    </div>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}월 ${day}일의 일기`;
};
