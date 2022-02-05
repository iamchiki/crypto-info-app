import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { newsApi } from '../services/newsApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(newsApi.middleware);
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(newsApi.middleware),
});
