import React from 'react'
import Counter from '../components/counter_mapping'
import Adder from '../components/add_mapping'
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
