import update from 'immutability-helper';


export default function authentication(state = {}, action) {

    const { type } = action;

    switch (type) {

        case 'AUTH_USER':
            return update(state, { authenticated: { $set: true}, user: { $set: action.payload } } );

        case 'UNAUTH_USER':
            return update(state, { authenticated: { $set: false}, error: { $set: action.error} } );

        case 'EMAIL_CONFIRM':
            return update(state, {authenticated: { $set: 'pending'} } )

        default:
            return state;
    }

}