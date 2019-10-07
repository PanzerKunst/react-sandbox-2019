let nextCragId = 0;

export const addCrag = ({ name, latitude, longitude }) => ({
  type: 'ADD_CRAG',
  id: nextCragId++,
  name,
  latitude,
  longitude
});

export const deleteCrag = (id) => ({
  type: 'DELETE_CRAG',
  id
});

let nextRouteId = 0;

export const addRoute = ({ name, grade, cragId }) => ({
  type: 'ADD_ROUTE',
  id: nextRouteId++,
  name,
  grade,
  cragId
});

export const deleteRoute = (id) => ({
  type: 'DELETE_ROUTE',
  id
});
