import { apiSlice } from "../apiSlice";

export const authApi = apiSlice.injectEndpoints({
      endpoints: (builder) => ({
             //Registration endpoint
              registerUser: builder.mutation({
                     query: (payload) => ({
                           url: "v1/auth/register",
                           method: "POST",
                           body: payload
                     })
              }),
             
              //Login endpoint
              loginUser: builder.mutation({
                   query: (payload) => ({
                         url: "/v1/auth/login",
                         method: "POST",
                         body: payload
                   })
              })
      })
})

export const {
     useRegisterUserMutation,
} = authApi;