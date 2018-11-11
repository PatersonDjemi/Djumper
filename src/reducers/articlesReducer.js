import update from "immutability-helper";

export default (state = {}, action) => {
    const { payload } = action;

    switch (action.type) {
        case "ARTICLES_FETCHED":
            return update(state, { articles: { $set: payload } });
        default:
            return state;
    }
}
