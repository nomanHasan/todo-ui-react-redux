// Set up your application entry point here...

import React from 'react'

import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory } from 'react-router'
import routes from './routes'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <Router routes = {routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('app')
)