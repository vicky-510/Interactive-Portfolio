import { apiSlice } from './apiSlice';
const JOBS_URL = '/api/jobs';

export const jobApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (params) => ({
        url: JOBS_URL,
        params,
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({ type: 'Job', id: _id })),
              { type: 'Job', id: 'LIST' },
            ]
          : [{ type: 'Job', id: 'LIST' }],
    }),

    getJob: builder.query({
      query: (id) => `${JOBS_URL}/${id}`,
      providesTags: (result, error, id) => [{ type: 'Job', id }],
    }),

    addJob: builder.mutation({
      query: (data) => ({
        url: JOBS_URL,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Job', id: 'LIST' }],
    }),

    updateJob: builder.mutation({
      query: ({ id, actionToken, ...data }) => ({
        url: `${JOBS_URL}/${id}`,
        method: 'PUT',
        body: data,
        headers: { 'X-Action-Token': actionToken },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Job', id }, { type: 'Job', id: 'LIST' }],
    }),

    deleteJob: builder.mutation({
      query: ({ id, actionToken }) => ({
        url: `${JOBS_URL}/${id}`,
        method: 'DELETE',
        headers: { 'X-Action-Token': actionToken },
      }),
      invalidatesTags: [{ type: 'Job', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobQuery,
  useAddJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobApiSlice;
