import { combineReducers } from 'redux';
import training from './trainingReducer';
import test from './testReducer';

const rootReducer = combineReducers({
  training,
  test
});

export default rootReducer;
