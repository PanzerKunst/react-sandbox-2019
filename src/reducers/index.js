import { combineReducers } from 'redux';
import cragsReducer from './cragsReducer';
import routesReducer from './routesReducer';

const rootReducer = combineReducers({
  crags: cragsReducer, // The state attribute will be named after the key - `crags` here
  routes: routesReducer
});

export default rootReducer;
