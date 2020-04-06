import { SET_TIME } from '../constants/redux-actions';

export function setTime({hour, minute}) {
  return { type: SET_TIME, hour, minute };
}
