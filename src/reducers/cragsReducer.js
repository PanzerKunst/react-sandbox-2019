const defaultState = {
  isFetching: false,
  items: [],
  isError: false
};

const cragsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REQUEST_CRAGS':
      return Object.assign({}, state, {
        isFetching: true,
        isError: false
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
        isError: true
      });

    case 'ADD_CRAG':
      const itemsWithAddedCrag = [
        ...state.items,
        {
          id: action.id,
          name: action.name,
          latitude: action.latitude,
          longitude: action.longitude
        }
      ];

      return Object.assign({}, state, {
        items: itemsWithAddedCrag
      });

    case 'DELETE_CRAG':
      const itemsWithoutDeletedCrag = state.items.filter(crag => crag.id !== action.id);

      return Object.assign({}, state, {
        items: itemsWithoutDeletedCrag,
        lastUpdated: action.deletedAt
      });

    default:
      return state;
  }
};

export default cragsReducer;
