import { ADD, addFunction } from '../actions/add_action'
import expect from 'expect'
/*
 * reducers
 */
const initialState = 0

let add = (state = initialState ,action) => {
  switch (action.type) {
    case ADD:
      return state + 1
    default:
      return state
  }
}

export default add

expect(
  add(0, addFunction())
).toEqual(1);

console.log('addReducer - Tests Passed!')
