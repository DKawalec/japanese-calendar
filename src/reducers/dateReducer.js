import { SET_DATE } from '../constants/redux-actions';
import { getDayOfWeek } from '../utils/date-helpers';

const defaultState = {
  year: 2020,
  month: 4,
  day: 4,
  dayOfWeek: 6
};

export default function dateReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_DATE: 
    return Object.assign({}, state, {
      year: action.year,
      month: action.month,
      day: action.day,
      dayOfWeek: getDayOfWeek(action.day, action.month, action.year)
    });
  default:
    return Object.assign({}, state);
  }
}
