import { createSlice } from '@reduxjs/toolkit';

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    doctorToken: localStorage.getItem('doctorToken') || null,
    doctorId: localStorage.getItem('doctorId') || null,
    departmentId: localStorage.getItem('department') || null,
    isLoggedIn: false,
  },

  reducers: {
    setLogin: (state, action) => {
      localStorage.setItem('doctorToken', action.payload.doctorToken);
      localStorage.setItem('doctorId', action.payload.doctorId);
      localStorage.setItem('departmentId', action.payload.departmentId);

      state.doctorToken = action.payload.doctorToken;
      state.isLoggedIn = action.payload.success;
    },

    setDoctorId: (state, action) => {
      state.doctorId = action.payload.doctorId;
      state.departmentId = action.payload.departmentId;
    },

    setDoctorLogout: (state) => {
      state.doctorToken = null;
      state.doctorId = null;
      state.departmentId = null;
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});

export const { setLogin, setDoctorLogout, setDoctorId } = doctorSlice.actions;

export default doctorSlice.reducer;
