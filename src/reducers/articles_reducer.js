import update from 'immutability-helper';

export default function articlesReducer(state={}, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ARTICLES_FETCHED':
            return update(state, { articles: { $set: payload } });
        default:
            return state;
    }

}