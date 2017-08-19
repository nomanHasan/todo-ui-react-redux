import React from 'react'

import { Route, IndexRoute } from 'react-router'

import Home from './components/common/HomePage'
import About from './components/common/AboutPage'

import TodoComponent from './components/todo/todo.component'
import App from './components/app.component'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/about" component={About}></Route>
      <Route path="/todos" component={TodoComponent}></Route>
    </Route>
  );