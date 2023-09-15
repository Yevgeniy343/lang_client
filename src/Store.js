import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlise from "./features/user/userSlise";
import adminSlise from "./features/adminSlice";
import jurySlice from "./features/jury/jurySlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
};

// export const store = configureStore({
//   reducer: {
//     user: userSlise,
//     admin: adminSlise,
//   },
// });

const rootReduser = combineReducers({
  user: userSlise,
  admin: adminSlise,
  jury: jurySlice,
});
const persistedReducer = persistReducer(persistConfig, rootReduser);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
