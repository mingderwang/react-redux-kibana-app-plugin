import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import { createStore } from 'redux'
import expect from 'expect'
import { increment, decrement, INCREMENT, DECREMENT } from './actions/counter_action'
import { Counter } from './components/counter_component.jsx'
import { counter } from './reducers/counter_reducer'

const store = createStore(counter)

const render = _ => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement = { _ =>
                    store.dispatch(increment())
      }
      onDecrement = { _ =>
                    store.dispatch(decrement())
      }
      />,
    document.getElementById('app')
  )
}

store.subscribe(render)
render()

expect(
  counter(0, increment())
).toEqual(1);

expect(
  counter(1, decrement())
).toEqual(0);

console.log('Tests Passed!')
