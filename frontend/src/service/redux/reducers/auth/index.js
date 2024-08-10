import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    role: localStorage.getItem('role') || null,
    isLoggedIn: false,
    showNotification: false,
    patientId: '',
  },

  reducers: {
    setLogin: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userId', action.payload.userId);
      localStorage.setItem('role', action.payload.role);

      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.role = action.payload.role;
      state.isLoggedIn = true;
      state.patientId = action.payload.patientId;
      // state.isLoggedIn = action.payload.success;
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    setLogout: (state) => {
      state.token = null;
      state.userId = null;
      state.role = null;
      state.isLoggedIn = false;
      localStorage.clear();
      state.showNotification = false;
    },
    setNotification: (state) => {
      state.showNotification = !state.showNotification;
      console.log(state.showNotification);
    },
    setPatientId: (state, action) => {
      state.patientId = action.payload;
      console.log(state.patientId);
    },
  },
});

export const { setLogin, setLogout, setUserId, setNotification, setPatientId } =
  authSlice.actions;

export default authSlice.reducer;
