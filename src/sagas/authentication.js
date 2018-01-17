import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../actions/type';
import config from '../../config'
import axios from 'axios'




/************** Log in **************/

function* loginStartAsync(Email, Password) {

    const endPoint = `${config.baseUrl}/login`;

     return yield axios.post(endPoint, {Email, Password})
         .then(response => response)
         .catch(error => {
             // la reponse en cas de mauvaise requete se trouve dans error.response
             return error.response
         });
}


function* loginStart(action) {

    const { payload: { Email, Password }, history} = action;

    const response = yield call(loginStartAsync, Email, Password);

    const { data, status } = response;

        if (status === 200) {
          // send action to the reducer
          yield  put({type: "AUTH_USER"});
          // redirect the user
          yield history.push('/');

        } else {

           yield put({type: "ERROR", payload: data.error });

        }
}

export function* startLogInSaga() {

    yield takeLatest(types.LOG_IN_START, loginStart);
}



/********* sign up ****************/

function* startSignUpAsync(FirstName, LastName, Email, Password, Agree) {

    const endPoint = `${config.baseUrl}/sign-up`;

    return yield axios.post(endPoint, {FirstName, LastName, Email, Password, Agree})
                    .then(response => response)
                    .catch(error => error.response)
}

function* startSignUp(action) {

    const { payload: { FirstName, LastName, Email, Password, Agree}, history } = action;

    const response =  yield call(startSignUpAsync, FirstName, LastName, Email, Password, Agree );

    const { data, status } = response;

    if  (status === 200 ) {

        yield put({type: "AUTH_USER"});

        yield history.push('/');

    } else {

        yield put({type: "ERROR", payload: data.error });
    }

}

export function* startSignUpSaga() {
    yield takeLatest(types.SIGN_UP_START, startSignUp)
}
