import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bing-news-search1.p.rapidapi.com/',
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      // query: ({ category, count }) =>
      //   `https://raw.githubusercontent.com/iamchiki/test-api/main/news.json`,
      query: ({ category, count }) => {
        return {
          url: `news/search?q=${category}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`,
          headers: {
            'x-bingapis-sdk': 'true',
            'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
            'x-rapidapi-key':
              '2df9cb13aamshe0ae8977ddad9f0p17d117jsn9fefd03ae7e0',
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

// 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',

// url: `news/search?q=${category}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`,
// headers: {
//   'x-bingapis-sdk': 'true',
//   'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//   'x-rapidapi-key':
//     '2df9cb13aamshe0ae8977ddad9f0p17d117jsn9fefd03ae7e0',
// },
