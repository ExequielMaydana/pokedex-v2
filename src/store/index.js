// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import nameUserReducer from "./slices/nameUser.slice"; // Importa el reductor directamente

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, nameUserReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
