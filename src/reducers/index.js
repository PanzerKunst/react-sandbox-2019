import { combineReducers } from 'redux';
import cragsReducer from './cragsReducer';

const appReducers = combineReducers({
  crags: cragsReducer // The state attribute will be named after the key - `crags` here
});

export default appReducers;
