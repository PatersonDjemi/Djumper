import update from 'immutability-helper';

export default function articles(state={}, action) {
    const { type, payload } = action;

    switch (type) {
        case 'FETCH_ALL_ARTICLES':
            return update(state, { articles: { $set: payload } });
        default:
            return state;
    }

}