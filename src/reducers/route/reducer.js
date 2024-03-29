import { REQUEST_ROUTES, RECEIVE_ROUTES_OK, RECEIVE_ROUTES_ERROR, ADD_ROUTE_OK, ADD_ROUTE_ERROR, DELETE_ROUTE_OK, DELETE_ROUTE_ERROR, DELETE_ROUTES_FOR_CRAG_OK, DELETE_ROUTES_FOR_CRAG_ERROR } from './actions';
import { sortBy } from 'lodash-es';

const defaultState = {
  isFetching: false,
  items: []
};

const routesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ROUTES:
      return Object.assign({}, state, {
        isFetching: true,
        error: undefined
      });

    case RECEIVE_ROUTES_OK:
      return Object.assign({}, state, {
        isFetching: false,
        items: sortBy(action.items, 'grade').reverse(),
        lastUpdated: action.receivedAt
      });

    case RECEIVE_ROUTES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: 'RECEIVE'
      });

    case ADD_ROUTE_OK:
      return defaultState;

    case ADD_ROUTE_ERROR:
      return Object.assign({}, state, {
        error: 'ADD'
      });

    case DELETE_ROUTE_OK:
      return defaultState;

    case DELETE_ROUTE_ERROR:
      return Object.assign({}, state, {
        error: 'DELETE'
      });

    case DELETE_ROUTES_FOR_CRAG_OK:
      return defaultState;

    case DELETE_ROUTES_FOR_CRAG_ERROR:
      return Object.assign({}, state, {
        error: 'DELETE_FOR_CRAG'
      });

    default:
      return state;
  }
};

export default routesReducer;
