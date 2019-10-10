import { combineReducers } from 'redux';
import cragsReducer from './crag/reducer';
import routesReducer from './route/reducer';

const rootReducer = combineReducers({
  crags: cragsReducer, // The state attribute will be named after the key - `crags` here
  routes: routesReducer
});

export default rootReducer;
