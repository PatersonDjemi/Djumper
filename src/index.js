import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter  as Router} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'; // pour utiliser reduxdevtools
import  createSagaMiddleware  from 'redux-saga';

import '../semantic/dist/semantic.css'
import '../styles/style.css'

import rootReducers from './reducers'
import rootSaga from './sagas'
import App from './components/app'
import {persistState, loadPersistedState} from './persistState'


const sagaMiddleware = createSagaMiddleware();
const composeWithDevTool =  composeWithDevTools(applyMiddleware(sagaMiddleware));
const loadedState = loadPersistedState();

export const myStore = createStore(rootReducers, loadedState, composeWithDevTool);

myStore.subscribe(() => {
    // add a callback to avoid calling the persiState function
    // everytime the state changes: throttle (from lodash)
    // console.log('my state is ', myStore.getState())
});

sagaMiddleware.run(rootSaga);

ReactDom.render(
    <Provider store={myStore}>
        <Router >
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


