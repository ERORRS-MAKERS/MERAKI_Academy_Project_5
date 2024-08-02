import { createSlice } from '@reduxjs/toolkit';

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    appointment: [],
  },

  reducers: {
    setAppointments: (state, action) => {
      state.appointment = action.payload.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
      });
    },

    clearAppointments: (state) => {
      state.appointment = [];
    },
  },
});

export const { setAppointments, clearAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
