import { ADD, CHANGE_INCREMENT, SUB } from "../actions/actionTypes"

const initialState = {
  counter: 0,
  increment: 0
}

export default function counter1(state = initialState, action) {
  switch (action.type) {
      case ADD:
          return {
              ...state,
              counter: state.counter + action.payload
          }
      case SUB:
          return {
              ...state,
              counter: state.counter - action.payload
          }
      case CHANGE_INCREMENT:
          return {
              ...state,
              increment: isNaN(action.payload) ? 0 : action.payload
          }    
      default:
          return state
  }
}