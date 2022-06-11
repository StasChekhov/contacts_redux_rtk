import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
 reducerPath: "contacts",
 baseQuery: fetchBaseQuery({
  baseUrl: "https://6298a13ade3d7eea3c6c6089.mockapi.io/api/contacts",
 }),
 tagTypes: ["Contacts"],
 endpoints: (builder) => ({
  getContacts: builder.query({
   query: () => `/contacts`,
   providesTags: ["Contacts"],
  }),

  addContact: builder.mutation({
   query: (contacts) => ({
    url: "contacts",
    method: "POST",
    body: contacts,
   }),
   invalidatesTags: ["Contacts"],
  }),
  deleteContact: builder.mutation({
   query: (id) => ({
    url: `contacts/${id}`,
    method: "DELETE",
   }),
   invalidatesTags: ["Contacts"],
  }),
 }),
});

export const {
 useGetContactsQuery,
 useAddContactMutation,
 useDeleteContactMutation,
} = contactsApi;
