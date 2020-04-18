import { SET_TEST_DATA, SET_TEST_RESULT } from '../constants/redux-actions';
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
  timeOfDay: PM,
  isPassed: false,
  isAnswered: false
};

export default function testReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_TEST_DATA: 
    return Object.assign({}, state, {
      year: action.date.year,
      month: action.date.month,
      day: action.date.day,
      dayOfWeek: getDayOfWeek(action.date.day, action.date.month, action.date.year),
      hour: action.time.hour,
      minute: action.time.minute,
      timeOfDay: getAmPm(action.time.hour, action.time.minute),
      isAnswered: false,
      isPassed: false
    });
  case SET_TEST_RESULT: 
    return Object.assign({}, state, {
      isPassed: action.isPassed,
      isAnswered: true
    });
  default:
    return Object.assign({}, state);
  }
}
