import { SET_DATE, SET_TIME } from '../constants/redux-actions';

export function setDate({year, month, day}) {
  return { type: SET_DATE, year, month, day };
}

export function setTime({hour, minute}) {
  return { type: SET_TIME, hour, minute };
}
