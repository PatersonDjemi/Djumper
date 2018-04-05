// all the router stuff of the app
import React from 'react'
import {Route, Switch} from 'react-router-dom'


import Home from './home_page';
import FAQ from './faq_page'
import Signup from '../containers/signup_page'
import Login from '../containers/login_page'
import Dashboard from './dashboard'
import Modal from '../reusable/modal'
import Thankyou from './thankyou'
import CheckMail from './checkedmail'


import Test from './test'




const App = () => {
    return (
        <Switch>
            {/* <Route path="/test/:tests/" component={Test} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login}  />
            <Route path="/faq" component={FAQ} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/modal" component={Modal} />
            <Route path="/thankyou" component={Thankyou} />
            <Route path="/checkedmail/:token" component={CheckMail} />
            <Route path="/" exact component={Home} />
        </Switch>
    );
}

export default App;