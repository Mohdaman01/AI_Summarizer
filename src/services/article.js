import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const reapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    // reducerPath
    reducerPath: 'articleApi',
    // baseQuery 
    baseQuery: fetchBaseQuery({
        baseUrl: `https://article-extractor-and-summarizer.p.rapidapi.com/`,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', reapidApiKey);
            headers.set('X-RapidAPI-Host', 
            'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    // endpoints 
    endpoints: (builder) =>({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;