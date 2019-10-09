import fetch from 'cross-fetch';
import { isEmpty } from 'lodash-es';

const _shouldFetchCrags = state => {
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

export function addCrag(crag) {
  return dispatch => {
    fetch(`http://localhost:3001/crags`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crag)
    })
      .then(() => dispatch({
        type: 'ADD_CRAG_OK'
      }))
      .catch(() => dispatch({
        type: 'ADD_CRAG_ERROR'
      }));
  };
}

export function deleteCrag(id) {
  return dispatch => {
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

export const deleteRoute = id => ({
  type: 'DELETE_ROUTE',
  id
});

export const deleteRoutesForCrag = id => ({
  type: 'DELETE_ROUTES_FOR_CRAG',
  id
});
