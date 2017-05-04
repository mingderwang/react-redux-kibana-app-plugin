import React from 'react'
import PropTypes from 'prop-types'
import { default as Counter } from '../components/counter_helper'
import { default as Adder } from '../components/add_helper'
const App = () => {
  return (
      <div className="container">
        <Counter/>
        <Adder/>
      </div>
  );
};

export default App;
