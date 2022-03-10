import { createReducer } from "../utils";
import { AlertType } from "./alert-types";

const initialState = {
    message: "",
    show: false
};

const alertStart =(state, payload) => ({
    ...state,
    message: payload.message,
    show: true
});

const alertStop = (state, payload) => ({
    ...state,
    message: "",
    show: false
});

export const AlertReducer = createReducer(initialState, {
    [AlertType.ALERT_START]: alertStart,
    [AlertType.ALERT_STOP]: alertStop
});