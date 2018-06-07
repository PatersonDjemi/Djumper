import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../actions/type';
import config from '../../config'
import axios from 'axios'
import { saveToken, extractResponse, handleErrorOnRequest, ErrorOnRequest } from '../../utils';


function* fetchingAsync() {
    const endpoint = `${config.baseUrl}/articles/allArticles`;
    
    return yield axios.get(endpoint)
        .then(response => response)
        .catch( error => handleErrorOnRequest(error))
}

function* fetchingStart() {
    let response;
    try {
        response = yield call(fetchingAsync)
    }

    catch(error) {
        console.log('herror on the request ', error);
    }
}

export function* fetchingArticlesSaga() {
    yield takeLatest(types.FETCHING_ARTICLES, fetchingStart)
}