import {ADD, ADD2, CHANGE_INCREMENT, SUB} from './actionTypes';

export function add(value) {
  return {
    type: ADD,
    payload: value
  }
}

export function sub(value) {
  return {
    type: SUB,
    payload: value
  }
}

export function changeIncrement(value) {
  return {
    type: CHANGE_INCREMENT,
    payload: value
  }
}

export function add2(value) {
  return {
    type: ADD2,
    payload: value
  }
}

export function asyncAdd(value) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(value))
    }, 3000);
  }
}