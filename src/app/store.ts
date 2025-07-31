import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../features/tmdb/tmdbApi";
import bookmarkReducer from "../features/bookmark/bookmark";
export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    bookmark: bookmarkReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
