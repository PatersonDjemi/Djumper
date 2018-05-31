import * as types from './type'

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

export function tellToLogin() {
    return {
        type: types.TELL_TO_LOGIN_FIRST,
        error: 'Please make sure you login first in oder to visit the dashboard'
    }
}

