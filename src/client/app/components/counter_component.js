import React, { Component } from "react"
import PropTypes from 'prop-types'

class Counter extends Component { // ES6
//const Counter = React.createClass({ // ES5
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
// }); // ES5
} // ES6

Counter.propTypes = {
  counter_state: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;
