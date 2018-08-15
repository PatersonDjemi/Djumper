import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../actions/type';
import config from '../../config'
import axios from 'axios'
import { saveToken, extractResponse, handleErrorOnRequest, ErrorOnRequest, takeTokenFromLocalStorage  } from '../../utils';


function* fetchingAsync(token) {
    const endpoint = `${config.baseUrl}/articles/allArticles`;
    
    return yield axios.get(endpoint, { headers: { 'x-token' : token } })
        .then(response => response)
        .catch( error => {
            console.log('this is the error', error);
            handleErrorOnRequest(error)
        })
}

function* fetchingStart() {
    let response;
    let token = takeTokenFromLocalStorage();

    try {
        response = yield call(fetchingAsync, token)
        const data = extractResponse(response, false)
        console.log('the data is ', data);
        yield put({type: 'ARTICLES_FETCHED', payload: data})

    }

    catch(error) {
        console.log('herror on the request ', error);
        const errMsg = error.data.error;
        console.warn('error message is ', errMsg )
    }
}

export function* fetchingArticlesSaga() {
    yield takeLatest(types.FETCHING_ARTICLES, fetchingStart)
}