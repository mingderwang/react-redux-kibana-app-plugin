import React from 'react'
import { addFunction } from '../actions/add_action'
import Adder from './add_component'
import { connect } from 'react-redux'

/*
 * 對應 Redux 的 state 到 component 的 props
 */

const mapStateToProps = (...args) => { // can replace ...args with state
  return {
    counter_state: args[0].add_state
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
