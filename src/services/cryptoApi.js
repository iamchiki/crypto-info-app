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
          'x-rapidapi-key':
            'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
        },
      }),
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => ({
        url: `/coin/${coinId}`,
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key':
            'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
        },
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => ({
        url: `coin/${coinId}/history?timeperiod=${timeperiod}`,
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key':
            'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
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
