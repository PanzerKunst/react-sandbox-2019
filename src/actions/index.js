let nextCragId = 0;

export const addCrag = (name) => ({
  type: 'ADD_CRAG',
  id: nextCragId++,
  name
});
