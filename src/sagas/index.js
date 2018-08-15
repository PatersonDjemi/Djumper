import { fork } from 'redux-saga/effects'
import { startLogInSaga, startSignUpSaga, startAutoLogin } from "./authentication"


export default function* rootSaga() {
 yield [
     fork(startLogInSaga),
     fork(startSignUpSaga),
     fork(startAutoLogin)
 ]
}