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
