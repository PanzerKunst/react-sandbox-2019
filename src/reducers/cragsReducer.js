const cragsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CRAG':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          latitude: action.latitude,
          longitude: action.longitude
        }
      ];

    case 'DELETE_CRAG':
      return state.filter(crag => crag.id !== action.id);

    default:
      return state;
  }
};

export default cragsReducer;
