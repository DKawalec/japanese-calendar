import { SET_TEST_DATA, SET_TEST_RESULT } from '../constants/redux-actions';

export function setTestData({year, month, day}, {hour, minute}) {
  return { type: SET_TEST_DATA, date: {year, month, day}, time: {hour, minute} };
}

export function setTestResult(isPassed) {
  return { type: SET_TEST_RESULT, isPassed };
}
