const crag = (state, action) => {
  switch (action.type) {
    case 'ADD_CRAG':
      return {
        id: action.id,
        name: action.name
      };

    default:
      return state;
  }
};

const crags = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CRAG':
      return [
        ...state,
        crag(undefined, action)
      ];

    default:
      return state;
  }
};

export default crags;
