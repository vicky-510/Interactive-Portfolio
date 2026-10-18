import { apiSlice } from './apiSlice';
const VISIT_URL = '/api/visits';

export const visitApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVisitCount: builder.query({
      query: () => VISIT_URL,
      providesTags: ['Visit'],
    }),

    incrementVisitCount: builder.mutation({
      query: () => ({
        url: VISIT_URL,
        method: 'POST',
      }),
      invalidatesTags: ['Visit'],
    }),
  }),
});

export const { useGetVisitCountQuery, useIncrementVisitCountMutation } = visitApiSlice;
