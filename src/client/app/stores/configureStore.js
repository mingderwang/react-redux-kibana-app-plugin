import { createStore, combineReducers } from 'redux'
import counterReducer from '../reducers/counterReducer'
import addReducer from '../reducers/addReducer'

let rootReducer = combineReducers({
  counter_state : counterReducer,
  add_state : addReducer
})

export default function configureStore() {
  return createStore(rootReducer);
}
