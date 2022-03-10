import {LoginTypes} from "./login-types";

const LoginStart = (loginInfo) => ({
    type: LoginTypes.LOGIN_START,
    payload: {
        loginInfo: loginInfo
    }
});

const LoginFinish = (userInfo) => ({
    type: LoginTypes.LOGIN_FINISH,
    payload: {
        loginInfo: userInfo
    }
});

const LoginCreateStart = (accountInfo) => ({
    type: LoginTypes.LOGIN_CREATE_START,
    payload: {
        accountInfo: accountInfo
    }
});

const LoginCreateFinish = (result) => ({
    type: LoginTypes.LOGIN_CREATE_FINISH,
    payload:{
        result: result
    }
});

const LoginCreateModalClose = (close) => ({
    type: LoginTypes.LOGIN_MODAL_CLOSE,
    payload: {
        accountModalSuccess: false
    }
})

const Logout = () => ({
    type: LoginTypes.LOGOUT,
    payload:{

    }
})

export const LoginAction = {
    LoginStart,
    LoginFinish,
    LoginCreateStart,
    LoginCreateFinish,
    LoginCreateModalClose,
    Logout
}

