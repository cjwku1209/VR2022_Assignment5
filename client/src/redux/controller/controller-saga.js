import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects';
import { ControllerAction } from './controller-action';
import { ControllerTypes } from './controller-types';

const controllerFetchStart = function *(action) {
    const task = () => new Promise((resolve, reject)=>{
        fetch("/api/controller", {
            method: "POST",
            body: JSON.stringify({"user_id": action.payload.user_id}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(json=> {
                resolve(json)
            })
    })
    const json = yield call(task);
    console.log(json)
    if(json.success){
        yield put(ControllerAction.controllerFetchFinish(json.controller[0]))
    }
}

const controllerUpdateStart = function *(action) {
    const task = () => new Promise((resolve, reject)=>{
        fetch("/api/update-controller/"+action.payload.user_id, {
            method: "POST",
            body: action.payload.controller,
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
        yield put(ControllerAction.controllerFetchFinish(json.controller))
    }
}

export const ControllerSaga = function* () {
    yield takeEvery(ControllerTypes.CONTROLLER_FETCH_START, controllerFetchStart);
    yield takeEvery(ControllerTypes.CONTROLLER_UPDATE_START, controllerUpdateStart)
}