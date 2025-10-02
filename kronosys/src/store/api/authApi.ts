import { apiSlice } from "./apiSlice";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface Role {
  id: number;
  name: "admin" | "ticketer" | "commercial" | "private";
  description: string;
}

export interface User {
  id: number;
  roleId: number;
  email: string;
  phone: string | null;
  fullName: string;
  address: string | null;
  rfid_tag: string | null;
  registered_by: number;
  vehicle_id: string | null;
  created_at: string;
  updated_at: string;
  role: Role;
}

export interface LoginResponse {
  status: string;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface ErrorResponse {
  status: string;
  message: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/v1/api/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation } = authApi;