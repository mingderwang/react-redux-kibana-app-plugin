import { createStore, combineReducers } from 'redux'
import counterReducer from '../reducers/counterReducer'

let rootReducer = combineReducers({
  counter_state : counterReducer
})

export default createStore(rootReducer)
