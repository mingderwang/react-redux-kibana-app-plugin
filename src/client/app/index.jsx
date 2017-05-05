import React from 'react'
import ReactDOM from 'react-dom'
import store from './stores/store'
import App from './containers/app'
import { Provider }from 'react-redux'
import 'react-table/react-table.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
