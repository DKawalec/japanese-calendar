import { combineReducers } from 'redux';
import date from './dateReducer';
import time from './timeReducer';

const rootReducer = combineReducers({
  date,
  time
});

export default rootReducer;
