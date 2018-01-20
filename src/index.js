import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'; // pour utiliser reduxdevtools
import  createSagaMiddleware  from 'redux-saga';




import '../semantic/out/semantic.css'
import '../styles/style.css'
import '../sass/main.scss'

import RootReducers from './reducers'
import rootSaga from './sagas'

import App from './components/app'


const sagaMiddleware = createSagaMiddleware();

const ComposeWithDevTools =  composeWithDevTools(applyMiddleware(sagaMiddleware));

export const MyStore = createStore(RootReducers, ComposeWithDevTools);


sagaMiddleware.run(rootSaga)


ReactDom.render(
    <Provider store={MyStore}>
        <Router >
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


// browserRouter va mettre à notre disposition l' history library
