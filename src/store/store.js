import { compose, legacy_createStore, applyMiddleware } from "redux"
// import logger from "redux-logger"
import { rootReducer } from "./root-reducer"

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }
    console.log("type: ", action.type)
    console.log("payload: ", action.payload)
    console.log("currentState: ", store.getState())

    next(action)

    console.log("next State: ", store.getState())
}

const middlewares = [loggerMiddleware]

const compsedEnhancers = compose(applyMiddleware(...middlewares))

export const store = legacy_createStore(rootReducer, undefined, compsedEnhancers)



