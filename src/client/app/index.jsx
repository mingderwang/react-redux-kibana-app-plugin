import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import { createStore } from 'redux'
import { increment, decrement } from './actions/counter_action'
import { Counter } from './components/counter_component.jsx'
import store from "./state/store";

const render = _ => {
  ReactDOM.render(
    <Counter
      value={store.getState().counter_state}
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
