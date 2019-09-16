import { Switch, Route, BrowserRouter } from 'react-router-dom'
import React, { Component }  from 'react'
import App from './App'

import Header from '@/pages/header'
import Home from '@/pages/home'

class Router extends Component {
  render() {
    return (<App>
      <BrowserRouter>
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </App>)
  }
}

export default Router