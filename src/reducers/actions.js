import fetch from 'cross-fetch';
import { isEmpty } from 'lodash-es';

let nextCragId = 0;

const _shouldFetchCrags = (state) => {
  return !state.crags.error && !state.crags.isFetching && isEmpty(state.crags.items);
};

export function fetchCragsIfNeeded() {
  return (dispatch, getState) => {
    if (_shouldFetchCrags(getState())) {
      dispatch({
        type: 'REQUEST_CRAGS'
      });

      fetch('http://localhost:3001/crags')
        .then(response => response.json())
        .then(json => dispatch({
          type: 'RECEIVE_CRAGS_OK',
          items: json,
          receivedAt: Date.now()
        }))
        .catch(() => dispatch({
          type: 'RECEIVE_CRAGS_ERROR'
        }));
    }
  };
}

export const addCrag = ({ name, latitude, longitude }) => ({
  type: 'ADD_CRAG',
  id: nextCragId++,
  name,
  latitude,
  longitude
});

export function deleteCrag(id) {
  return (dispatch) => {
    fetch(`http://localhost:3001/crags/${id}`, { method: 'DELETE' })
      .then(() => dispatch({
        type: 'DELETE_CRAG_OK',
        id,
        deletedAt: Date.now()
      }))
      .catch(() => dispatch({
        type: 'DELETE_CRAG_ERROR'
      }));
  };
}

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
