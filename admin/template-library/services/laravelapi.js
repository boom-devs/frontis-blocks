import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${FB_TLibrary.portalApi}/api/`,
    prepareHeaders: (headers) => {
      // Token removed for security - use server-side proxy if authentication needed
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (endpoint) => endpoint,
    }),
    postData: builder.mutation({
      query: ({ endpoint, body }) => ({
        url: endpoint,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetDataQuery, usePostDataMutation } = api;
