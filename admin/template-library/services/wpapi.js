import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://frontis-sync.boomdevshub.com/wp-json',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        'Bearer nbcnrqfyorftyzpiojzfnjbidchpgnawnifdbnhhbxbuedphusbaunvecxtvvjvnrehznbmccyanndwrjloncuhobjtfbkcazfjtbbvtsuvgiokjknvgrwdwfgfsonbw'
      );
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
