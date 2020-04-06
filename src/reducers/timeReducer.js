import { SET_TIME } from '../constants/redux-actions';

const defaultState = {
  hour: 12,
  minute: 30
};

export default function timeReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_TIME: 
    return Object.assign({}, state, { hour: action.hour, minute: action.minute });
  default:
    return Object.assign({}, state);
  }
}
