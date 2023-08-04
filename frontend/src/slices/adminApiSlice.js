import {apiSlice} from './apiSlice';
const ADMIN_URL = '/api/admin';


export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
        query: (data) => ({
            url: `${ADMIN_URL}/auth`,
            method:'POST',
            body: data
        }),
    }),
    register: builder.mutation({
      query: (data) => ({
          url: `${ADMIN_URL}/register`,
          method:'POST',
          body: data,
      }),
  }),
    logout: builder.mutation({
      query: () => ({
        url: `${ADMIN_URL}/logout`,
        method:'POST',
    }),
  }),
  updateAdmin: builder.mutation({
    query: (data) => ({
        url: `${ADMIN_URL}/profile`,
        method:'PUT',
        body: data,
    }),
}),
contact: builder.mutation({
  query: (data) => ({
      url: `${ADMIN_URL}/Contact`,
      method:'POST',
      body: data,
  }),
}),

}),

});

export const {useLoginMutation, useLogoutMutation, useRegisterMutation,useUpdateAdminMutation, useContactMutation} = adminApiSlice;