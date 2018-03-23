// all the router stuff of the app
import React from 'react'
import {Route, Switch} from 'react-router-dom'


import Home from './home_page';
import FAQ from './faq_page'
import Signup from '../containers/signup_page'
import Login from '../containers/login_page';
import Dashboard from './dashboard'
// import Loader from '../reusable/Loader'



const App = () => {
    return (
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login}  />
            <Route path="/faq" component={FAQ} />
            <Route path="/dashboard" component={Dashboard} />
            {/* <Route path="/loader" component={Loader} /> */}
            <Route path="/" component={Home} />
        </Switch>
    );
}

export default App;