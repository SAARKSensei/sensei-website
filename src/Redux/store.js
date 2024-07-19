"use client";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./sagas";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./slice/rootReducer";

//to avoid creating noop storage
const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;
export const persistor = persistStore(store);