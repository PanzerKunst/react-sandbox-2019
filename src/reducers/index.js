import { combineReducers } from 'redux';
import cragsReducer from './cragsReducer';

const appReducers = combineReducers({
  crags: cragsReducer
});

export default appReducers;
