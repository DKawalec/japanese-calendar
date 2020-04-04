import { SET_DATE } from '../constants/redux-actions';

export function setDate({year, month, day}) {
  return { type: SET_DATE, year, month, day };
}
