export const getDaysInMonth = (year: number, month: number,): number => {
  const days = [0, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) days[2] = 29;
  else days[2] = 28;

  return days[month]; // 返回月份的天数
}