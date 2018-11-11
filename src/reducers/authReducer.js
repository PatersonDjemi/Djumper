import update from 'immutability-helper';

export default function authentication(state = {authenticated: false}, action) {
    // just need info about the user here and if the authentication process has been successfull
    const { payload } = action;

    switch (action.type) {

        case "AUTH_USER":
            return update(state, { authenticated: { $set: true}, user: { $set: payload.firstName, $set: payload.LastName } } );

        case "UNAUTH_USER":
            return update(state, { authenticated: { $set: false}, error: { $set: action.error} } );

        case "EMAIL_CONFIRM":
            return update(state, {authenticated: { $set: "pending"} } );

        default:
            return state
    }
}
