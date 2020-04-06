import { SET_TIME } from '../constants/redux-actions';
import { PM } from '../constants/time-constants';
import { getAmPm } from '../utils/time-helpers';

const defaultState = {
  hour: 12,
  minute: 30,
  timeOfDay: PM
};

export default function timeReducer(state = defaultState, action) {
  switch (action.type) {
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
