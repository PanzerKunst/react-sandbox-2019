const defaultState = {
  isFetching: false,
  items: []
};

const cragsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REQUEST_CRAGS':
      return Object.assign({}, state, {
        isFetching: true,
        error: undefined
      });

    case 'RECEIVE_CRAGS_OK':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });

    case 'RECEIVE_CRAGS_ERROR':
      return Object.assign({}, state, {
        isFetching: false,
        error: 'RECEIVE'
      });

    case 'ADD_CRAG_OK':
      return defaultState;

    case 'ADD_CRAG_ERROR':
      return Object.assign({}, state, {
        error: 'ADD'
      });

    case 'DELETE_CRAG_OK':
      const itemsWithoutDeletedCrag = state.items.filter(crag => crag.id !== action.id);

      return Object.assign({}, state, {
        items: itemsWithoutDeletedCrag,
        lastUpdated: action.deletedAt,
        error: undefined
      });

    case 'DELETE_CRAG_ERROR':
      return Object.assign({}, state, {
        error: 'DELETE'
      });

    default:
      return state;
  }
};

export default cragsReducer;
