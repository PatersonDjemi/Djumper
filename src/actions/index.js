import * as types from './type'

export function signupStart({ first, last, email, password, agree, history }) {
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

export function loginStart({email, password, history}) {
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

