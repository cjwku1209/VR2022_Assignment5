import {LoginTypes} from "./login-types";
import {createReducer} from "../utils";

const initialState = {
    login: false,
    user: {},
    accountModalSuccess: false,
}

const loginFinish = (state, payload) => ({
    ...state,
    user: payload.loginInfo,
    login: true
});

const loginCreateFinish = (state, payload) => ({
    ...state,
    accountModalSuccess: true
});

const loginCreateModalClose = (state, payload) => ({
    ...state,
    accountModalSuccess: payload.accountModalSuccess
})

const logout = (state, payload) => ({
    ...state,
    user: {},
    login: false
})


export const LoginReducer = createReducer(initialState, {
    [LoginTypes.LOGIN_FINISH]: loginFinish,
    [LoginTypes.LOGIN_CREATE_FINISH]: loginCreateFinish,
    [LoginTypes.LOGIN_MODAL_CLOSE]: loginCreateModalClose,
    [LoginTypes.LOGOUT]: logout
});
