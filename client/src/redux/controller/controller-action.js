import { ControllerTypes } from "./controller-types";

const controllerFetchStart = (user_id) => ({
    type: ControllerTypes.CONTROLLER_FETCH_START,
    payload: {
        user_id: user_id
    }
})

const controllerFetchFinish = (controller) => ({
    type: ControllerTypes.CONTROLLER_FETCH_FINISH,
    payload: {
        controller: controller
    }
})

const controllerUpdateStart = (user_id, controller) => ({
    type: ControllerTypes.CONTROLLER_UPDATE_START,
    payload: {
        user_id: user_id,
        controller: controller
    }
})

const controllerUpdateFinish = (controller) => ({
    type: ControllerTypes.CONTROLLER_UPDATE_FINISH,
    payload: {
        controller: controller
    }
})

export const ControllerAction = {
    controllerFetchStart,
    controllerFetchFinish,
    controllerUpdateStart,
    controllerUpdateFinish
}
