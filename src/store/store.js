import { compose, legacy_createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { rootReducer } from "./root-reducer"



const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"]
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const compsedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = legacy_createStore(persistedReducer, undefined, compsedEnhancers)

export const persistor = persistStore(store)



