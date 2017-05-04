import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../components/counter_mapping'
import Adder from '../components/add_mapping'

const App = () => {
  return (
      <div className="container">
        <Counter/>
        <Adder/>
      </div>
  );
};

export default App;
