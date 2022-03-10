import { AlertType } from "./alert-types";

const alertStart = (message) => ({
    type: AlertType.ALERT_START,
    payload: {
        message: message,
        show: true
    }
});

const alertStop = () => ({
    type: AlertType.ALERT_STOP,
    payload: {}
});

export const AlertAction = {
    alertStart,
    alertStop
};