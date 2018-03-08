import * as types from './type'

export function signupStart({ first, last, email, password, agree, history }) {
    return {
        type: types.SIGN_UP_START,
        payload: {
            FirstName: first,
            LastName: last, 
            Email: email,
            Password: password,
            Agree: agree 
        },
         history
    }
}

export function loginStart({email, password, history}) {
    return {
        type: types.LOG_IN_START,
        payload: { 
            email, 
            password
        },
        history
    }

}

