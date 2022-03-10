import {
	applyMiddleware,
	combineReducers,
	createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
	all,
	call,
	fork
} from 'redux-saga/effects';
import { LoggerReducer } from './logger/logger-reducer';
import { LoggerSaga } from './logger/logger-saga';
import {LoginReducer} from "./login/login-reducer";
import {AlertReducer} from "./alert/alert-reducer";
import {ControllerReducer} from "./controller/controller-reducer";
import {LoginSaga} from "./login/login-saga";
import {ControllerSaga} from "./controller/controller-saga";

const saga = createSagaMiddleware();

export const Store = createStore(combineReducers({
	LoggerReducer,
	LoginReducer,
	AlertReducer,
	ControllerReducer,
}), applyMiddleware(saga));

saga.run(function* () {
	yield all([
		call(LoggerSaga),
		...[
			ControllerSaga,
			LoginSaga
		].map(fork)
	]);
});
