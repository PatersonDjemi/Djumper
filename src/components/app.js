// all the router stuff of the app
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Webpages from './webpages'
import Dashboard from './dashboard/dashboard'
import DashboardContainer from '@containers/dashboard_container'
import Signup from '@containers/signup_page'
import Login from '@containers/login_page'
import Modal from '@reusable/modal'

import Test from './test'

const App = () => {
    return (
        <Switch>
            <Route path="/test" component={Test} />
            <Route path="/modal" component={Modal} />

            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login}  />

            <Route path="/dashboard" component={DashboardContainer} />
            <Route path="/"  component={Webpages} />
            
            {/* <Route path="/" exact component={Home} /> */}
        </Switch>
    );
}

export default hot(module)(App);