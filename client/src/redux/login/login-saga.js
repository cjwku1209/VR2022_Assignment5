import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects';
import {AlertAction} from "../alert/alert-action";
import {LoginAction} from "./login-action";
import {LoginTypes} from "./login-types";

const LoginCreateStart =  function *(action) {
    const task = () => new Promise((resolve, reject)=>{
        fetch("/api/create-user", {
            method: "POST",
            body: action.payload.accountInfo,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(json=> {
                resolve(json)
            })
    })
    const json = yield call(task);
    if(json.success){
        yield put(LoginAction.LoginCreateFinish(json.success))
    }
    else{
        yield put(AlertAction.alertStart(json.message))
    }
}

const LoginStart =  function *(action) {
    const task = () => new Promise((resolve, reject)=>{
        fetch("/api/login", {
            method: "POST",
            body: action.payload.loginInfo,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(json=> {
                resolve(json)
            })
    })
    const json = yield call(task);
    if(json.success){
        yield put(LoginAction.LoginFinish(json.user))
    }
    else{
        yield put(AlertAction.alertStart(json.message))
    }
}

export const LoginSaga = function* () {
    yield takeEvery(LoginTypes.LOGIN_CREATE_START, LoginCreateStart);
    yield takeEvery(LoginTypes.LOGIN_START, LoginStart)
};
