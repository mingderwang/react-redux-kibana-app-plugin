import { INCREMENT, DECREMENT, increment, decrement } from '../actions/counter_action'
import expect from 'expect'
/*
 * reducers
 */
const initialState = 7

let counter = (state = initialState ,action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default counter

expect(
  counter(0, increment())
).toEqual(1);

expect(
  counter(1, decrement())
).toEqual(0);

console.log('Tests Passed!')
