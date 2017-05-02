import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import { createStore } from 'redux'
import expect from 'expect'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state;
  }
}

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = createStore(counter)

const render = _ => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement = { _ =>
                    store.dispatch({
                     type: 'INCREMENT'
                    })
}
      onDecrement = { _ =>
                    store.dispatch({
                     type: 'DECREMENT'
                    })
      }
      />,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()

expect(
  counter(0, { type: 'INCREMENT'})
).toEqual(1);

expect(
  counter(1, { type: 'DECREMENT'})
).toEqual(0);

console.log('Tests Passed!')
