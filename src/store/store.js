import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reduceer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [logger];

// const composeEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(persistedReducer);
// export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
