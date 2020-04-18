import { SET_DATE, SET_TIME } from '../constants/redux-actions';
import { getDayOfWeek } from '../utils/date-helpers';
import { PM } from '../constants/time-constants';
import { getAmPm } from '../utils/time-helpers';

const defaultState = {
  year: 2020,
  month: 4,
  day: 4,
  dayOfWeek: 6,
  hour: 12,
  minute: 30,
  timeOfDay: PM
};

export default function trainingReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_DATE: 
    return Object.assign({}, state, {
      year: action.year,
      month: action.month,
      day: action.day,
      dayOfWeek: getDayOfWeek(action.day, action.month, action.year)
    });
  case SET_TIME: 
    return Object.assign({}, state, {
      hour: action.hour,
      minute: action.minute,
      timeOfDay: getAmPm(action.hour, action.minute)
    });
  default:
    return Object.assign({}, state);
  }
}
