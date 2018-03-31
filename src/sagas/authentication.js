import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../actions/type';
import config from '../../config'
import axios from 'axios'
import { saveToken, extractResponse } from '../../utils';




/************** 
 * 
 * 
 * Log in
 * 
 *  **************/
function* loginStartAsync(email, password) {
//penser à changer test par login pour des expemles reels
    const endPoint = `${config.baseUrl}/user/test`;

     return yield axios.post(endPoint, { email, password})
         .then(response => response)
         .catch(error => {
            if(error.response) {
                // server respond but with a bad status code
                console.log('response back but not was expected')
                throw error.response;

            } else if (error.request) {
                // request was made but no response received
                console.log('why no response from server');
                throw error.request;
            }         
        });
}


function* loginStart(action) {

    const { payload: { email, password } } = action;
    let response;

    try {
        response = yield call(loginStartAsync, email, password);

        const data = extractResponse(response);
        console.log('response data', data );

        yield put({type: 'AUTH_USER'});
    }
    catch (e) {
        // customiser l erreur et renvoyer un feedback à l utilisateur
        console.log('error on the request', e)
        // user not authenticated
        yield put({type: 'UNAUTH_USER'})
    }
}

export function* startLogInSaga() {

    yield takeLatest(types.LOG_IN_START, loginStart);
}







/*********
 * 
 * 
 *  sign up
 * 
 * 
 *  ****************/

function* startSignUpAsync(firstName, lastName, email, password, agree) {
    //penser à changer test par signup pour des expemles reels
    const endPoint = `${config.baseUrl}/user/signup`;

    return yield axios.post(endPoint,{ firstName, lastName, email, password, agree })
        .then( response => response)
        .catch(error => {
            if(error.response) {
                // server respond but with a bad status code
                console.log('response back but not was expected')
                throw error.response;

            } else if (error.request) {
                // request was made but no response received
                console.log('why no response from server');
                throw error.request;
            }         
        });
}

function* signupStart(action) {

    const { payload: { firstName, lastName, email, password, agree}, history } = action;
    //console.log('action signup in saga is: ', action)
    let response;

    try {
        response =  yield call(startSignUpAsync, firstName, lastName, email, password, agree );
    // extract data and save token
        const {data} = response
        console.log('response data', response );

        yield put({type: 'EMAIL_CONFIRM'});
    }

    catch(e)  {
        // customiser l erreur et renvoyer un feedback à l utilisateur
        console.log('error on the request', e)
        // user not authenticated
        yield put({type: 'UNAUTH_USER'})
    }
}

export function* startSignUpSaga() {
    yield takeLatest(types.SIGN_UP_START, signupStart)
}
