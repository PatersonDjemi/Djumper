import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '@actions/type';
import config from '../../config'
import axios from 'axios'


import { saveToken, extractResponse, handleErrorOnRequest, ErrorOnRequest } from '../../utils';


/************** 
 * 
 * Log in
 * 
 ***************/
function* loginStartAsync(email, password) {
//penser à changer test par login pour des expemles reels
    const endPoint = `${config.baseUrl}/auth/signin`;

     return yield axios.post(endPoint, { email, password })
        .then(response => response)
        .catch( error => handleErrorOnRequest(error));
}


function* loginStart(action) {

    const { payload: { email, password } } = action;
    let response;

    try {
        response = yield call(loginStartAsync, email, password);

        const data = extractResponse(response, true);
        console.log('response data', data );

        yield put({type: 'AUTH_USER', payload: data});
    }
    catch (error) {
        // customiser l erreur et renvoyer un feedback à l utilisateur
        // l erreur ici correspond à l´erreur que j envois depuis mon server
        console.log('error on the request', error)
        // user not authenticated
        if ( !error.ob.data ) {
            return yield put({type: 'UNAUTH_USER', error: 'Oops an error occurs, please try aigain later '});           
        }
        return yield put({type: 'UNAUTH_USER', error: error.ob.data})
    }
}

export function* startLogInSaga() {

    yield takeLatest(types.LOG_IN_START, loginStart);
}







/*********
 * sign up flow **********************
 ********/

export function* startSignUpSaga() {
    yield takeLatest(types.SIGN_UP_START, signupStart);
}

function* startSignUpAsync(firstName, lastName, email, password, agree, createdAt) {
    //penser à changer test par signup pour des expemles reels
    const endPoint = `${config.baseUrl}/auth/signup`;

    return yield axios.post(endPoint,{ firstName, lastName, email, password, agree, createdAt })
        .then( response => response)
        .catch(error => handleErrorOnRequest(error));
}

function* signupStart(action) {

    const { payload: { firstName, lastName, email, password, agree, createdAt}, history } = action;
    let response;
    try {
        response =  yield call(startSignUpAsync, firstName, lastName, email, password, agree, createdAt );
    // extract data and save token
        const data = extractResponse(response, false);
        console.log('response data', data );
        yield put({type: 'AUTH_USER', payload: data});
    }
    catch (error)  {
        console.log('error on the request', error)
        // user not authenticated
        if (!error.ob.data) {
            // if the failure is on the request
            return yield put({type: 'UNAUTH_USER', error: 'Oops an error occurs, please try aigain later '});           
        }
        return yield put({type: 'UNAUTH_USER', error: error.ob.data })
    }
}



/*********
 * 
 * 
 *  auto login
 * 
 * 
 *********/

function* autoLoginAsync(token) {
    const endPoint = `${config.baseUrl}/auth/checkmail/:token`;
    return yield axios.post(endPoint, {token} )
        .then( resposne => resposne)
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

function* autoLogin(action) {
    const token = action.payload;
    let response;

    console.log('token from action is: ', token)
    try {
        response = yield call(autoLoginAsync, token);

        const data = extractResponse(response, true);
        console.log('response data', data );

        yield put({type: 'AUTH_USER'});
    } 
    catch(e) {
        // customiser l erreur et renvoyer un feedback à l utilisateur
        const errMsg = e.data.error;
        console.log('error message is ', errMsg )
        // user not authenticated
        yield put({type: 'UNAUTH_USER'})        
    }
}


export function* startAutoLogin() {
    yield takeLatest(types.AUTO_LOGIN, autoLogin)
}


/*********
 * 
 * 
 *  login out
 * 
 * 
 *********/

 function* logOutUserAsync(token) {
    const endPoint = `${config.baseUrl}/auth/signout`;
    return yield axios.delete(endPoint, { headers: { 'x-token': token } } )
        .then(response => response)
        .catch(error => handleErrorOnRequest(error));
 }

 function* logOutUser({ history }) {
    const token = localStorage.getItem('token');
    
    try {
        let response = yield call(logOutUserAsync, token);
        localStorage.removeItem('token');
        yield history.push('/');
        yield put({ type: 'UNAUTH_USER' });
    }
    catch(error) {
        console.log('error on the request', error)
        // // user not authenticated
        // if (!error.ob.data) {
        //     // if the request is on the request
        //     return yield put({type: 'AUTH_USER', error: 'Oops an error occurs, please try aigain later '});           
        // }
        // return yield put({type: 'AUTH_USER', error: error.ob.data })
    }
 }
 

 export function* startLogOutSaga() {
     yield takeLatest(types.LOG_OUT_START, logOutUser)
 }


 // faire une funtion qui me construit mes endpoints