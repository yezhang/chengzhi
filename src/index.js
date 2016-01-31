import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
