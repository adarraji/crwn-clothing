import { configureStore } from "@reduxjs/toolkit"
// import logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { rootReducer } from "./root-reducer"

// Setting redux-persist
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

// setting persisted reducer 
const persistedReducer = persistReducer(persistConfig, rootReducer)

// const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean)

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false,
    // }).concat(middleWares)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})


export const persistor = persistStore(store)



