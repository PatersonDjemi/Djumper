import * as types from './type'

/* 
    sign up the user for the first time
*/
export function signupStart({ first, last, email, password, agree }) {
    return {
        type: types.SIGN_UP_START,
        payload: {
            firstName: first,
            lastName: last, 
            email: email,
            password: password,
            agree: agree 
        }
    }
}

/* 
    log the user in when he clicks on deconnexion
*/
export function loginStart({email, password}) {
    return {
        type: types.LOG_IN_START,
        payload: { 
            email, 
            password
        }
    }
}

export function autoLogin(token) {
    return {
        type: types.AUTO_LOGIN,
        payload: token
    }
}

/* notify a user to login first when visiting a private route 
    without being authenticated
*/
export function tellToLogin() {
    return {
        type: types.TELL_TO_LOGIN_FIRST,
        error: 'Please make sure you login first in oder to visit the dashboard'
    }
}

/* 
    log the user out when he clicks on deconnexion
*/
export function logUserOut(history) {
    return {
        type: types.LOG_OUT,
        history
    }
}


/*
    api call to fetch articles
*/

export function fetchArticles() {
    return {
        type: types.FETCHING_ARTICLES
    }
}
