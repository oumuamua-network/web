import { Switch, Route, BrowserRouter } from 'react-router-dom'
import React, { Component }  from 'react'
import App from './App'

import Header from '@/pages/header'
import Home from '@/pages/home'
import Loan from '@/pages/loan'
import Capital from '@/pages/capital'
import LaunchLoan from '@/pages/launchLoan'
import LaunchCapital from '@/pages/launchCapital'

class Router extends Component {
  render() {
    return (<App>
      <BrowserRouter>
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/launchCapital" component={LaunchCapital} />
            <Route exact path="/launchLoan" component={LaunchLoan} />
            <Route exact path="/capital" component={Capital} />
            <Route exact path="/loan" component={Loan} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </App>)
  }
}

export default Router