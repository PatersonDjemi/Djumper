import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, browserHistory, Route, Switch} from 'react-router-dom'


import '../semantic/src/semantic.less'
import '../styles/style.css'

// import RootReducers from './reducers'

import App from './components/app';
import SignUp from './components/signup'

//let myStore = createStore(RootReducers);
// creer le store au niveau du provider

ReactDom.render(
    <Provider>
        <Router history={browserHistory}>
            <div>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);


// browserRouter va mettre à notre disposition l' history library
//<Route path="/" component={App} />