import React from 'react'
import Counter from '../components/counter_mapping'
import Adder from '../components/add_mapping'
import DevTools from '../utils/DevTools'
import Gmap from '../components/map'

const App = () => {
  return (
      <div className="container">
        <Counter/>
        <Adder/>
        <DevTools/>
        <Gmap/>
      </div>
  );
};

export default App;
