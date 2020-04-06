import {
  WEEK_DAY_NAMES,
  MONTH_NAMES,
  MONTH_DAY_NAMES,
  HOUR_NAMES,
  TIME_OF_DAY_NAMES
} from '../constants/japanese-dictionary';

const lookUp = (list, index) => {
  const result = list[index].split('|');
  return result[1] ? `${result[0]} (${result[1]})` : result[0];
};

export const getDateTranslation = (year, month, day, dayOfWeek) => {
  return `${year} ${lookUp(MONTH_NAMES, month - 1)} ${lookUp(MONTH_DAY_NAMES, day - 1)} - ${lookUp(WEEK_DAY_NAMES, dayOfWeek - 1)} desu!`;
};

export const getTimeTranslation = (hour, minute, timeOfDay) => {
  return `${TIME_OF_DAY_NAMES[timeOfDay]} ${lookUp(HOUR_NAMES, hour)} ${minute}`;
};
