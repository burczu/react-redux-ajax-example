import fetch from 'isomorphic-fetch'

export const FETCH_STARTED = 'FETCH_STARTED'
export function fetchStarted() {
  return {
    type: FETCH_STARTED,
  }
}

export const FETCH_COMPLETED = 'FETCH_COMPLETED'
export function fetchCompleted() {
  return {
    type: FETCH_COMPLETED
  }
}

export const FETCH_ERROR= 'FETCH_ERROR'
export function fetchError() {
  return {
    type: FETCH_ERROR
  }
}

export function fetchAll() {
  return function (dispatch) {
    dispatch(fetchStarted());

    return fetch('https://api.github.com/repos/burczu/react-redux-ajax-example/branches')
      .then(response => response.json())
      .then(json => dispatch(fetchCompleted()))
      .catch(() => dispatch(fetchError()));
  }
}