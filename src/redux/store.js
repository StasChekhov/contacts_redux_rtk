import { configureStore } from "@reduxjs/toolkit";
// import {
//  persistStore,
//  persistReducer,
//  FLUSH,
//  REHYDRATE,
//  PAUSE,
//  PERSIST,
//  PURGE,
//  REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { contactsApi } from "./contactsApi";
import { contactsSliceReducer } from "./clickSlice";

// const persistConfig = {
//  key: "root",
//  storage,
// };

// const persistedContactsReducer = persistReducer(
//  persistConfig,
//  clickSlice.reducer
// );

export const store = configureStore({
 reducer: {
  myValue: contactsSliceReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(contactsApi.middleware),
});

// export const persistor = persistStore(store);
