import { INCREMENT, DECREMENT } from '../actions/counter_action'
/*
 * reducers
 */
const initialState = 7 

export const counter = (state = initialState ,action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
