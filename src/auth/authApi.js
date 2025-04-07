import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../utils/baseURL";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/auth`,
    credentials: "include",
  }),

  tagTypes: ["Member"],

  endpoints: (builder) => ({
   
    addMember: builder.mutation({
      query: (newMember) => ({
        url: "/add_member",
        method: "POST",
        body: newMember,
      }),
      invalidatesTags: ["Member"], 
    }),

    getMembers: builder.query({ 
      query: () => ({
        url: "/members",
        method: "GET",
      }),
      providesTags: ["Member"], // Changed from invalidatesTags to providesTags
    }),

    deleteMember: builder.mutation({
      query: (memberId) => ({
        url: `/members/${memberId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Member"],
    }),

    updateMemberRole: builder.mutation({
      query: ({ memberId, role }) => ({
        url: `/members/${memberId}`,
        method: "PUT",
        body: { role },
      }),
      invalidatesTags: ["Member"],
    }),

    editProfile: builder.mutation({
      query: (profileData) => ({
        url: `/edit-profile`,
        method: "PATCH",
        body: profileData,
      }),
      invalidatesTags: ["Member"],
    }),
  }),
});

export const {
  useAddMemberMutation,
  useGetMembersQuery,
  useUpdateMemberRoleMutation,
  useDeleteMemberMutation,
  useEditProfileMutation,
} = authApi;

export default authApi;