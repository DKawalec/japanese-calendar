import {
  MIN_MONTH,
  MAX_MONTH,
  MIN_DAY,
  FEBRUARY_DAYS,
  LEAP_FEBRUARY_DAYS,
  SHORT_MONTH_DAYS,
  LONG_MONTH_DAYS
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
    return { day: 1, month: 3, year: year - 1};
  } else {
    return { day, month, year: year - 1 };
  }
};

export const getNextYear = (day, month, year) => {
  if (isLeapYear(year) && month === 2 && day === LEAP_FEBRUARY_DAYS) {
    return { day: 1, month: 3, year: year + 1};
  } else {
    return { day, month, year: year + 1 };
  }
};

export const getPreviousMonth = (day, month, year) => {
  const lastMonth = month - 1;
  if (day > FEBRUARY_DAYS) {
    if (lastMonth < MIN_MONTH) {
      return { day: getMaxDay(12, year - 1), month: 12, year: year - 1 };
    } else {
      return { day: getMaxDay(lastMonth, year), month: lastMonth, year };
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
  if (day > FEBRUARY_DAYS) {
    if (nextMonth > MAX_MONTH) {
      return { day: getMaxDay(1, year + 1), month: 1, year: year + 1 };
    } else {
      return { day: getMaxDay(nextMonth, year), month: nextMonth, year };
    }
  } else {
    if (nextMonth > MAX_MONTH) {
      return { day, month: 1, year: year + 1 };
    } else {
      return { day, month: nextMonth, year }; 
    }
  }
};

export const getPreviousDay = (day, month, year) => {
  let yesterday = day - 1;
  let result = { day: yesterday, month, year };
  if (yesterday < MIN_DAY) {
    result = getPreviousMonth(day, month, year);
    result.day = getMaxDay(result.month, result.year);
  }
  return result;
};

export const getNextDay = (day, month, year) => {
  let tomorrow = day + 1;
  let result = { day: tomorrow, month, year };
  if (tomorrow > getMaxDay(month, year)) {
    result = getNextMonth(day, month, year);
    result.day = 1;
  }
  return result;
};
