import fetch from 'cross-fetch';
import { isEmpty } from 'lodash-es';

let nextCragId = 0;

export const requestCrags = () => ({
  type: 'REQUEST_CRAGS'
});

const _receiveCragsOk = (json) => ({
  type: 'RECEIVE_CRAGS_OK',
  items: json,
  receivedAt: Date.now()
});

const _receiveCragsError = () => ({
  type: 'RECEIVE_CRAGS_ERROR'
});

const _fetchCrags = () => async dispatch => {
  dispatch(requestCrags());

  try {
    const response = await fetch('http://localhost:3001/crags');
    const json = await response.json();

    return dispatch(_receiveCragsOk(json));
  } catch (ex) {
    return dispatch(_receiveCragsError());
  }
};

const _shouldFetchCrags = (state) => {
  return !state.crags.isError && !state.crags.isFetching && isEmpty(state.crags.items);
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
