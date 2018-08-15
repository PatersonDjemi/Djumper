import { fork } from 'redux-saga/effects'
import { startLogInSaga, startSignUpSaga, startAutoLogin, startLogOutSaga } from './authentication'
import { fetchingArticlesSaga } from './artciles'


export default function* rootSaga() {
 yield [
     fork(startLogInSaga),
     fork(startSignUpSaga),
     fork(startAutoLogin),
     fork(fetchingArticlesSaga),
     fork(startLogOutSaga)
 ]
}