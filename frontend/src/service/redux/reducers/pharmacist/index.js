import { createSlice } from "@reduxjs/toolkit";

export const pharmacistSlice = createSlice({
  name: "pharmacist",
  initialState: {
    pharmacisttoken: localStorage.getItem("pharmacisttoken") || null,
    pharmacistId: localStorage.getItem("pharmacistId") || null,
    isLoggedIn: false,
  },

  reducers: {
    setLogin: (state, action) => {
      localStorage.setItem("pharmacisttoken", action.payload.pharmacisttoken);
      localStorage.setItem("pharmacistId", action.payload.pharmacistId);

      state.pharmacisttoken = action.payload.pharmacisttoken;
      state.isLoggedIn = action.payload.success;
    },

    setPharmacistId: (state, action) => {
      state.pharmacistId = action.payload;
    },

    setLogout: (state) => {
      state.pharmacisttoken = null;
      state.pharmacistId = null;
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});

export const { setLogin, setLogout, setPharmacistId } = pharmacistSlice.actions;

export default pharmacistSlice.reducer;
