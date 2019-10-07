const routesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROUTE':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          grade: action.grade,
          cragId: action.cragId
        }
      ];

    default:
      return state;
  }
};

export default routesReducer;
