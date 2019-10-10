import { REQUEST_CRAGS, RECEIVE_CRAGS_OK, RECEIVE_CRAGS_ERROR, ADD_CRAG_OK, ADD_CRAG_ERROR, DELETE_CRAG_OK, DELETE_CRAG_ERROR } from './actions';

const defaultState = {
  isFetching: false,
  items: []
};

const cragsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_CRAGS:
      return Object.assign({}, state, {
        isFetching: true,
        error: undefined
      });

    case RECEIVE_CRAGS_OK:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });

    case RECEIVE_CRAGS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: 'RECEIVE'
      });

    case ADD_CRAG_OK:
      return defaultState;

    case ADD_CRAG_ERROR:
      return Object.assign({}, state, {
        error: 'ADD'
      });

    case DELETE_CRAG_OK:
      return defaultState;

    case DELETE_CRAG_ERROR:
      return Object.assign({}, state, {
        error: 'DELETE'
      });

    default:
      return state;
  }
};

export default cragsReducer;
