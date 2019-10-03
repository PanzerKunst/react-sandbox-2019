const crags = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CRAG':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];

    default:
      return state;
  }
};

export default crags;
