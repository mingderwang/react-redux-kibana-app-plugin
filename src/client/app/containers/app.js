import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../components/counter_mapping'
import Adder from '../components/add_mapping'
import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from '../utils/DevTools'


const App = () => {
  return (
      <div className="container">
        <Counter/>
        <Adder/>
        <DevTools/>
      </div>
  );
};

export default App;
