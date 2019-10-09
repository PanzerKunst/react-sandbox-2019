const defaultState = {
  isFetching: false,
  items: []
};

const cragsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REQUEST_CRAGS':
      return Object.assign({}, state, {
        isFetching: true
      });

    case 'RECEIVE_CRAGS':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
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
