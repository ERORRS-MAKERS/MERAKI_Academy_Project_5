import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("userId") || null,
    isLoggedIn: false,
    showNotification: false,
  },

  reducers: {
    setLogin: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);

      state.token = action.payload.token;
      state.isLoggedIn = action.payload.success;
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    setLogout: (state) => {
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
      localStorage.clear();
      state.showNotification = false
    },
    setNotification: (state) => {
      state.showNotification = !state.showNotification;
      console.log(state.showNotification)
    },
  },
});

export const { setLogin, setLogout, setUserId, setNotification } =
  authSlice.actions;

export default authSlice.reducer;
