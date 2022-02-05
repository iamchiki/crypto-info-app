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
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
