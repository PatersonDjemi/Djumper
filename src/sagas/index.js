import { fork } from 'redux-saga/effects'
import { startLogInSaga, startSignUpSaga, startAutoLogin } from './authentication'
import { fetchingArticlesSaga } from './artciles'


export default function* rootSaga() {
 yield [
     fork(startLogInSaga),
     fork(startSignUpSaga),
     fork(startAutoLogin),
     fork(fetchingArticlesSaga)
 ]
}