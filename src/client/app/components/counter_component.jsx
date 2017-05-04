import React, { Component } from "react"
import PropTypes from 'prop-types';
/*
 * React component
 */

class Counter extends Component {
render() {
  const { counter_state, onIncrement, onDecrement } = this.props
  return (
  <div>
    <h1>{counter_state}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
  );
  }
};

Counter.propTypes = {
  counter_state: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;
