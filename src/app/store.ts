import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../features/tmdb/tmdbApi";
import bookmarkReducer from "../features/bookmark/bookmark";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "bookmark",
  storage,
  whitelist: ["bookmark"],
};

const rootReducer = combineReducers({
  [tmdbApi.reducerPath]: tmdbApi.reducer,
  bookmark: bookmarkReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(tmdbApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
