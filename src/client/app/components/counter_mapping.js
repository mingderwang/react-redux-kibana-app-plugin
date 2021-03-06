import React from 'react'
import { increment, decrement } from '../actions/counter_action'
import Counter from './counter_component'
import { connect } from 'react-redux'

/*
 * 對應 Redux 的 state 到 component 的 props
 */

const mapStateToProps = (state) => {
  return {
    counter_state: state.counter_state
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
