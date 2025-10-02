import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../api/authApi";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const getInitialState = (): AuthState => {
  const token = sessionStorage.getItem("token");
  const userStr = sessionStorage.getItem("user");

  if (token && userStr) {
    try {
      const user = JSON.parse(userStr);
      return {
        user,
        token,
        isAuthenticated: true,
      };
    } catch {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    }
  }

  return {
    user: null,
    token: null,
    isAuthenticated: false,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
