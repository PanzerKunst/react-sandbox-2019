import fetch from 'cross-fetch';
import { isEmpty } from 'lodash-es';

let nextCragId = 0;

export const requestCrags = () => ({
  type: 'REQUEST_CRAGS'
});

export const receiveCrags = (json) => ({
  type: 'RECEIVE_CRAGS',
  items: json,
  receivedAt: Date.now()
});

const _fetchCrags = () => async dispatch => {
  dispatch(requestCrags());

  const response = await fetch('http://localhost:3001/crags');
  const json = await response.json();

  return dispatch(receiveCrags(json));
};

const _shouldFetchCrags = (state) => {
  return !state.crags.isFetching && isEmpty(state.crags.items);
};

export const fetchCragsIfNeeded = () => (dispatch, getState) => {
  if (_shouldFetchCrags(getState())) {
    return dispatch(_fetchCrags());
  }
};

export const addCrag = ({ name, latitude, longitude }) => ({
  type: 'ADD_CRAG',
  id: nextCragId++,
  name,
  latitude,
  longitude
});

export const deleteCrag = (id) => {
  fetch(`http://localhost:3001/crags/${id}`, { method: 'DELETE' });

  return {
    type: 'DELETE_CRAG',
    id,
    deletedAt: Date.now()
  };
};

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

export const deleteRoutesForCrag = (id) => ({
  type: 'DELETE_ROUTES_FOR_CRAG',
  id
});
