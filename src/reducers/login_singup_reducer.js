import update from 'immutability-helper';


export default function authentication(state = {}, action) {

    const { type } = action;

    switch (type) {

        case 'AUTH_USER':
            return update(state, { authenticated: { $set: true} } );

        case 'UNAUTH_USER':
            return update(state, { authenticated: { $set: true} } );

        case 'ERROR':
            return update(state, { authenticated: { $set: false }, error: { $set: action.payload }});

        default:
            return state;
    }

}