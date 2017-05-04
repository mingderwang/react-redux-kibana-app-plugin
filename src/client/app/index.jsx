import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import { createStore } from 'redux'
import { increment, decrement } from './actions/counter_action'
import Counter from './components/counter_component.jsx'
import store from "./state/store";
import { Provider, connect } from 'react-redux'

console.log(store)
/*
 * 對應 Redux 的 state 到 component 的 props
 */

const mapStateToProps = (...args) => { // can replace ...args with state
  return {
    counter_state: args[0].counter_state
  };
};

/*
 * 對應 Redux 的 actions 到 component 的 props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

const App = connect(
 mapStateToProps,
 mapDispatchToProps
)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
