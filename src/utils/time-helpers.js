import {
  MIN_HOUR,
  MAX_HOUR,
  MIN_MINUTE,
  MAX_MINUTE,
  AM, PM, NOON, MIDNIGHT
} from '../constants/time-constants';

export const formatTime = time => {
  if (time < 10) {
    return `0${time}`;
  }
  return `${time}`;
};

export const unformatTime = timeAsString => {
  if (!timeAsString) {
    return 0;
  } else if (timeAsString[0] === '0' && timeAsString[1]) {
    return parseInt(timeAsString.substring(1), 10);
  }
  return parseInt(timeAsString, 10);
};

export const validateHour = hour => hour >= MIN_HOUR && hour <= MAX_HOUR;

export const validateMinute = minute => minute >= MIN_MINUTE && minute <= MAX_MINUTE;

export const getSafeHour = hour => {
  if (hour < MIN_HOUR) {
    return MAX_HOUR;
  } else if (hour > MAX_HOUR) {
    return MIN_HOUR;
  }
  return hour;
};

export const getSafeMinute = minute => {
  if (minute < MIN_MINUTE) {
    return MAX_MINUTE;
  } else if (minute > MAX_MINUTE) {
    return MIN_MINUTE;
  }
  return minute;
};

export const getAmPm = (hour, minute) => {
  if (hour === 12 && minute === MIN_MINUTE) {
    return NOON;
  } else if (hour === MIN_HOUR && minute === MIN_MINUTE) {
    return MIDNIGHT;
  } else {
    return hour < 12 ? AM : PM;
  }
};

export const getRandomTime = () => {
  const hour = parseInt(Math.abs(Math.random() * 24), 10);
  const minute = parseInt(Math.abs(Math.random() * 60), 10);

  return { hour, minute };
};
