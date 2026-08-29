import { apiSlice } from './apiSlice';
const DASHBOARD_URL = '/api/dashboard';

export const dashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: (params) => ({
        url: `${DASHBOARD_URL}/stats`,
        params,
      }),
      providesTags: ['Dashboard'],
    }),

    getStorageStats: builder.query({
      query: () => `${DASHBOARD_URL}/storage`,
      providesTags: ['Dashboard'],
    }),
  }),
});

export const { useGetDashboardStatsQuery, useGetStorageStatsQuery } = dashboardApiSlice;
