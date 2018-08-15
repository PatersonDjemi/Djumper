import { combineReducers } from 'redux'
import {reducer as FormReducer } from 'redux-form'
import  authentication  from './login_singup_reducer'
import articlesReducer from './articles_reducer'



// le root reducer contient tous les reducers de l application

const RootReducer = combineReducers({
    form: FormReducer,
    authentication,
    articlesReducer
});

export default RootReducer;