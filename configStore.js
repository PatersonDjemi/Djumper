import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';


import RootReducers from './reducers'


const sagaMiddleware = createSagaMiddleware();
let myStore = createStore(RootReducers, applyMiddleware(sagaMiddleware));
// creer le store au niveau du provider

export default function configureStore(initialState) {

    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(RootReducers, initialState, applyMiddleware(sagaMiddleware) ),
        runSaga: sagaMiddleware.run
    }

}


/*
const store =
console.log(myStore);
console.log(sagaMiddleware)
*/