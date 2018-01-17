import * as types from './type'

export function startSignUp({ FirstName, LastName, Email, Password, Agree, history }) {
    return {
        type: types.SIGN_UP_START,
        payload: {FirstName, LastName, Email, Password, Agree},
        history
    }
}

export function startLogIn({Email, Password, history}) {
    return {
        type: types.LOG_IN_START,
        payload: { Email, Password },
        history
    }

}

