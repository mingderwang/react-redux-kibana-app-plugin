import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { increment, decrement } from '../actions/counter_action'
import Counter from './counter_component.jsx'
import store from "../stores/store";
import { Provider, connect } from 'react-redux'

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

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(Counter);
