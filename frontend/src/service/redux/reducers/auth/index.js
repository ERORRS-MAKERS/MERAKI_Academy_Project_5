import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("userId") || null,
    isLoggedIn: false,
    // Add userProfile to store user profile data
    userProfile: null,
  },

  reducers: {
    setLogin: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);

      state.token = action.payload.token;
      state.isLoggedIn = action.payload.success;
      // Store user profile data
      state.userProfile = action.payload.userProfile;
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    setLogout: (state) => {
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
      // Clear user profile data
      state.userProfile = null;
      localStorage.clear();
    },
  },
});

export const { setLogin, setLogout, setUserId } = authSlice.actions;

export default authSlice.reducer;
