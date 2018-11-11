import { combineReducers } from 'redux';
import {reducer as FormReducer } from 'redux-form';

import  authentication  from './authReducer';
import articles from './articlesReducer';
import ratePlan from "./ratePlanReducer";

// le root reducer contient tous les reducers de l application
const RootReducer = combineReducers({
    form: FormReducer,
    authentication,
    articles,
    ratePlan
});

export default RootReducer;