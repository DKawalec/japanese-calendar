import {
  MIN_MONTH,
  MAX_MONTH,
  FEBRUARY_DAYS,
  LEAP_FEBRUARY_DAYS,
  SHORT_MONTH_DAYS,
  LONG_MONTH_DAYS,
  DAYS_TABLE
} from '../constants/date-constants';

export const isLeapYear = year => (!(year % 4) && year % 100) || !(year % 400);

export const getMaxDay = (month, year) => {
  if (month === 2) {
    if (isLeapYear(year)) {
      return LEAP_FEBRUARY_DAYS;
    } else {
      return FEBRUARY_DAYS;
    }
  }  
  return month % 2 ? LONG_MONTH_DAYS : SHORT_MONTH_DAYS;
};

export const getPreviousYear = (day, month, year) => {
  if (isLeapYear(year) && month === 2 && day === LEAP_FEBRUARY_DAYS) {
    return { day: 28, month: 2, year: year - 1};
  } else {
    return { day, month, year: year - 1 };
  }
};

export const getNextYear = (day, month, year) => {
  if (isLeapYear(year) && month === 2 && day === LEAP_FEBRUARY_DAYS) {
    return { day: 28, month: 2, year: year + 1};
  } else {
    return { day, month, year: year + 1 };
  }
};

export const getPreviousMonth = (day, month, year) => {
  const lastMonth = month - 1;
  const maxDayLastMonth = getMaxDay(lastMonth, year);
  if (day > maxDayLastMonth) {
    if (lastMonth < MIN_MONTH) {
      return { day: getMaxDay(12, year - 1), month: 12, year: year - 1 };
    } else {
      return { day: maxDayLastMonth, month: lastMonth, year };
    }
  } else {
    if (lastMonth < MIN_MONTH) {
      return { day, month: 12, year: year - 1 };
    } else {
      return { day, month: lastMonth, year }; 
    }
  }
};

export const getNextMonth = (day, month, year) => {
  const nextMonth = month + 1;
  const maxDayNextMonth = getMaxDay(nextMonth, year);
  if (day > maxDayNextMonth) {
    if (nextMonth > MAX_MONTH) {
      return { day: getMaxDay(1, year + 1), month: 1, year: year + 1 };
    } else {
      return { day: maxDayNextMonth, month: nextMonth, year };
    }
  } else {
    if (nextMonth > MAX_MONTH) {
      return { day, month: 1, year: year + 1 };
    } else {
      return { day, month: nextMonth, year }; 
    }
  }
};

// IBM's Rata Die algorithm
export const getDayOfWeek = (day, month, year) => {
  let daysDiff = day;
  for (let y = 1; y <= year; y++) {
    const numMonths = y < year ? 12 : month - 1;
    const monthTableIndex = isLeapYear(y) ? 1 : 0;
    for (let m = 1; m <= numMonths; m++) {
      daysDiff += DAYS_TABLE[monthTableIndex][m];
    }
  }

  return daysDiff % 7 || 7;
};

export const getRandomDate = () => {
  const year = 2020; // temp; I don't need random years now
  const month = parseInt(Math.abs(Math.random() * 12) + 1, 10);
  const day = parseInt(Math.abs(Math.random() * getMaxDay(month, year)) + 1, 10);

  return { year, month, day };
};
