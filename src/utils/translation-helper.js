import {
  WEEK_DAY_NAMES,
  MONTH_NAMES,
  MONTH_DAY_NAMES,
  HOUR_NAMES,
  TIME_OF_DAY_NAMES,
  MINUTE_TENS,
  MINUTE_ONES,
  HALF
} from '../constants/japanese-dictionary';

const lookUp = (list, index) => {
  const result = list[index].split('|');
  return result[1] ? `${result[0]} (${result.slice(1).join(', ')})` : result[0];
};

export const getDateTranslation = (year, month, day, dayOfWeek) =>
  `${year} ${lookUp(MONTH_NAMES, month - 1)} ${lookUp(MONTH_DAY_NAMES, day - 1)} - ${lookUp(WEEK_DAY_NAMES, dayOfWeek - 1)} desu!`;

export const getTimeTranslation = (hour, minute, timeOfDay) =>
  `${TIME_OF_DAY_NAMES[timeOfDay]} ${lookUp(HOUR_NAMES, hour)} ${getMinutesTranslation(minute)}`;

export const getMinutesTranslation = minute => {
  const firstDigit = Math.floor(minute/10);
  const secondDigit = minute % 10;
  if (minute === 30) {
    return HALF;
  }
  return `${secondDigit ? MINUTE_TENS[firstDigit] : MINUTE_TENS[firstDigit].slice(0, -1)}${MINUTE_ONES[secondDigit]}`;
};
