import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addFunction } from '../actions/add_action'
import { connect } from 'react-redux'

class Adder extends Component { // ES6
// const Adder = React.createClass({ // ES5
render() {
  const { add_state, onAddFunction } = this.props
  return (
  <div>
    <h1>{add_state}</h1>
    <button onClick={onAddFunction}>+</button>
  </div>
  );
  }
// }); // ES5
} // ES6

Adder.propTypes = {
  add_state: PropTypes.number.isRequired,
  onAddFunction: PropTypes.func.isRequired,
}

/*
 * 對應 Redux 的 state 到 component 的 props
 */

const mapStateToProps = (state) => {
  return {
    add_state: state.add_state
  };
};

/*
 * 對應 Redux 的 actions 到 component 的 props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onAddFunction: () => dispatch(addFunction())
  };
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(Adder);
