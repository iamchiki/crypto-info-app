import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com/',
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limitCount) => ({
        url: `coins/?limit=${limitCount}`,
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        },
      }),
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => ({
        url: `/coin/${coinId}`,
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        },
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => ({
        url: `coin/${coinId}/history?timeperiod=${timeperiod}`,
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        },
      }),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
