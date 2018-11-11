import update from 'immutability-helper';

export default (state = {}, action) => {

    switch (action.type) {
        case "AUTH_USER":
            return update(state, { ratePlan: { $set: action.payload.ratePlan } });
        default:
            return state;
    }
};
