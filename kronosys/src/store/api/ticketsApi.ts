import { apiSlice } from "./apiSlice";

export interface Ticket {
  id: number;
  userId: number;
  validatedBy: number;
  isValidated: boolean;
  validatedAt: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    fullName: string;
    email: string;
    role: {
      name: string;
    };
  };
  validator: {
    id: number;
    fullName: string;
    email: string;
    role: {
      name: string;
    };
  };
}

export interface TicketsResponse {
  status: string;
  message: string;
  data: Ticket[];
}

export interface CreateTicketRequest {
  userId: number;
}

export interface CreateTicketResponse {
  status: string;
  message: string;
  data: Ticket;
}

export interface UpdateTicketRequest {
  isValidated: boolean;
}

export interface UpdateTicketResponse {
  status: string;
  message: string;
  data: Ticket;
}

export const ticketsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query<TicketsResponse, number | undefined>({
      query: (userId) => ({
        url: userId ? `/v1/api/tickets?userId=${userId}` : "/v1/api/tickets",
        method: "GET",
      }),
      providesTags: ["Ticket"],
    }),
    createTicket: builder.mutation<CreateTicketResponse, CreateTicketRequest>({
      query: (body) => ({
        url: "/v1/api/tickets",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Ticket"],
    }),
    updateTicket: builder.mutation<
      UpdateTicketResponse,
      { ticketId: number; body: UpdateTicketRequest }
    >({
      query: ({ ticketId, body }) => ({
        url: `/v1/api/tickets/${ticketId}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Ticket"],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useCreateTicketMutation,
  useUpdateTicketMutation,
} = ticketsApi;