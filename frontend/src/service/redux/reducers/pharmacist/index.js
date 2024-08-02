import { createSlice } from "@reduxjs/toolkit";

export const pharmacistSlice = createSlice({
  name: "pharmacist",
  initialState: {
    token: localStorage.getItem("token") || null,
    pharmacistId: localStorage.getItem("pharmacistId") || null,
    isLoggedIn: false,
  },

  reducers: {
    setLogin: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("pharmacistId", action.payload.pharmacistId);

      state.token = action.payload.token;
      state.isLoggedIn = action.payload.success;
    },

    setPharmacistId: (state, action) => {
      state.pharmacistId = action.payload;
    },

    setLogout: (state) => {
      state.token = null;
      state.pharmacistId = null;
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});

export const { setLogin, setLogout, setPharmacistId } = pharmacistSlice.actions;

export default pharmacistSlice.reducer;
