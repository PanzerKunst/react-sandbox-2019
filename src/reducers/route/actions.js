import fetch from 'cross-fetch';
import { isEmpty } from 'lodash-es';
import { backendRootUrl } from '../config';

export const REQUEST_ROUTES = 'REQUEST_ROUTES';
export const RECEIVE_ROUTES_OK = 'RECEIVE_ROUTES_OK';
export const RECEIVE_ROUTES_ERROR = 'RECEIVE_ROUTES_ERROR';
export const ADD_ROUTE_OK = 'ADD_ROUTE_OK';
export const ADD_ROUTE_ERROR = 'ADD_ROUTE_ERROR';
export const DELETE_ROUTE_OK = 'DELETE_ROUTE_OK';
export const DELETE_ROUTE_ERROR = 'DELETE_ROUTE_ERROR';
export const DELETE_ROUTES_FOR_CRAG_OK = 'DELETE_ROUTES_FOR_CRAG_OK';
export const DELETE_ROUTES_FOR_CRAG_ERROR = 'DELETE_ROUTES_FOR_CRAG_ERROR';

const _shouldFetchRoutes = state => {
  return !state.routes.error && !state.routes.isFetching && isEmpty(state.routes.items);
};

export function fetchRoutesIfNeeded() {
  return (dispatch, getState) => {
    if (_shouldFetchRoutes(getState())) {
      dispatch({
        type: REQUEST_ROUTES
      });

      fetch(`${backendRootUrl}/routes`)
        .then(response => response.json())
        .then(json => dispatch({
          type: RECEIVE_ROUTES_OK,
          items: json,
          receivedAt: Date.now()
        }))
        .catch(() => dispatch({
          type: RECEIVE_ROUTES_ERROR
        }));
    }
  };
}

export function addRoute(route) {
  return dispatch => {
    fetch(`${backendRootUrl}/routes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(route)
    })
      .then(() => dispatch({
        type: ADD_ROUTE_OK
      }))
      .catch(() => dispatch({
        type: ADD_ROUTE_ERROR
      }));
  };
}

export function deleteRoute(id) {
  return dispatch => {
    fetch(`${backendRootUrl}/routes/${id}`, { method: 'DELETE' })
      .then(() => dispatch({
        type: DELETE_ROUTE_OK
      }))
      .catch(() => dispatch({
        type: DELETE_ROUTE_ERROR
      }));
  };
}

export function deleteRoutesForCrag(id) {
  return dispatch => {
    fetch(`${backendRootUrl}/routes?cragId=${id}`, { method: 'DELETE' })
      .then(() => dispatch({
        type: DELETE_ROUTES_FOR_CRAG_OK
      }))
      .catch(() => dispatch({
        type: DELETE_ROUTES_FOR_CRAG_ERROR
      }));
  };
}
