import { apiSlice } from './apiSlice';
const NOTES_URL = '/api/notes';

export const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: (params) => ({
        url: NOTES_URL,
        params,
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ _id }) => ({ type: 'Note', id: _id })), { type: 'Note', id: 'LIST' }]
          : [{ type: 'Note', id: 'LIST' }],
    }),

    addNote: builder.mutation({
      query: (data) => ({
        url: NOTES_URL,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Note', id: 'LIST' }],
    }),

    updateNote: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${NOTES_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Note', id }, { type: 'Note', id: 'LIST' }],
    }),

    deleteNote: builder.mutation({
      query: (id) => ({
        url: `${NOTES_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Note', id: 'LIST' }],
    }),

    togglePinNote: builder.mutation({
      query: (id) => ({
        url: `${NOTES_URL}/${id}/pin`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Note', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
  useTogglePinNoteMutation,
} = noteApiSlice;
