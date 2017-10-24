import { combineReducers } from 'redux'
import {reducer as FormReducer } from 'redux-form'



// le root reducer contient tous les reducers de l application

const RootReducer = combineReducers({
form: FormReducer
});

export default RootReducer;