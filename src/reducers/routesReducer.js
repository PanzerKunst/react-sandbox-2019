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

    case 'DELETE_ROUTE':
      return state.filter(route => route.id !== action.id);

    case 'DELETE_ROUTES_FOR_CRAG':
      return state.filter(route => route.cragId !== action.id);

    default:
      return state;
  }
};

export default routesReducer;
