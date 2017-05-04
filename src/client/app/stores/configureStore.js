import { createStore, compose, combineReducers } from 'redux'
import counterReducer, { initialState } from '../reducers/counterReducer'
import addReducer from '../reducers/addReducer'

let rootReducer = combineReducers({
  counter_state : counterReducer,
  add_state : addReducer
})

import DevTools from '../utils/DevTools'
/**
 * https://github.com/rackt/redux/blob/master/docs/Glossary.md#store-enhancer
 * Higher order function that compose a store creator and returns a new one: (StoreCreator) => (StoreCreator)
 */
const storeEnhancers = [];

/**
 * Only require then add devtools to the store-enhancer when needed
 */
//if (process.env.DEVTOOLS) {
  storeEnhancers.push(DevTools.instrument());
//}

const combinedCreateStore = compose(...storeEnhancers)(createStore);
const store = combinedCreateStore(rootReducer, initialState);

export default function configureStore() {
  return store;
}
