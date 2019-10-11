import fetch from 'cross-fetch';
import { isEmpty } from 'lodash-es';
import { backendRootUrl } from '../config';

export const REQUEST_CRAGS = 'REQUEST_CRAGS';
export const RECEIVE_CRAGS_OK = 'RECEIVE_CRAGS_OK';
export const RECEIVE_CRAGS_ERROR = 'RECEIVE_CRAGS_ERROR';
export const ADD_CRAG_OK = 'ADD_CRAG_OK';
export const ADD_CRAG_ERROR = 'ADD_CRAG_ERROR';
export const DELETE_CRAG_OK = 'DELETE_CRAG_OK';
export const DELETE_CRAG_ERROR = 'DELETE_CRAG_ERROR';

const _shouldFetchCrags = state => {
  return !state.crags.error && !state.crags.isFetching && isEmpty(state.crags.items);
};

export function fetchCragsIfNeeded() {
  return (dispatch, getState) => {
    if (_shouldFetchCrags(getState())) {
      dispatch({
        type: REQUEST_CRAGS
      });

      fetch(`${backendRootUrl}/crags`)
        .then(response => response.json())
        .then(json => dispatch({
          type: RECEIVE_CRAGS_OK,
          items: json,
          receivedAt: Date.now()
        }))
        .catch(() => dispatch({
          type: RECEIVE_CRAGS_ERROR
        }));
    }
  };
}

export function addCrag(crag) {
  return dispatch => {
    fetch(`${backendRootUrl}/crags`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crag)
    })
      .then(() => dispatch({
        type: ADD_CRAG_OK
      }))
      .catch(() => dispatch({
        type: ADD_CRAG_ERROR
      }));
  };
}

export function deleteCrag(id) {
  return dispatch => {
    fetch(`${backendRootUrl}/crags/${id}`, { method: 'DELETE' })
      .then(() => dispatch({
        type: DELETE_CRAG_OK
      }))
      .catch(() => dispatch({
        type: DELETE_CRAG_ERROR
      }));
  };
}
