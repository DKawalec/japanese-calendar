import { SET_DATE } from '../constants/redux-actions';

const defaultState = {
  year: 2020,
  month: 4,
  day: 4
};

export default function dateReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_DATE: 
    return Object.assign({}, state, { year: action.year, month: action.month, day: action.day });
  default:
    return Object.assign({}, state);
  }
}
