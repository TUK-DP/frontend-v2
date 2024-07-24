export const SECONDS = 1000;
export const MINUTE = 60 * SECONDS;
export const HOUR = 60 * SECONDS;

//2024-06-20 => { year: 2024, month: 6, date: 20 }
export const dateParser = (date) => {
  const [year, month, day] = date.split("-").map(Number);
  return { year, month, day };
};

// { year: 2024, month: 6, day: 20 } => 2024-06-20
export const dateToDashString = ({ year, month, day }) => {
  return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
};

// { year: 2024, month: 6, day: 20 } => 2024.06.03
export const dateToDotString = ({ year, month, day }) => {
  return `${year}.${month.toString().padStart(2, "0")}.${day.toString().padStart(2, "0")}`;
};

// { year: 2024, month: 6 } => 2024-6
export const yearMonthToDashString = ({ year, month }) => {
  return `${year}-${month}`;
};
