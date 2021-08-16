import { ADD2 } from "../actions/actionTypes"

const initialState = {
  counter2: 200,
  increment: 0
}

export default function counter2(state = initialState, action) {
  switch (action.type) {
      case ADD2:
          return {
              ...state,
              counter2: state.counter2 + action.payload
          }   
      default:
          return state
  }
}