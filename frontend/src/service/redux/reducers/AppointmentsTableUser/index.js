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

    deleteAppointments: (state, action) => {
      state.appointment = state.appointment.filter(
        (appointment) => appointment.id !== action.payload
      );
    },

    clearAppointments: (state) => {
      state.appointment = [];
    },
  },
});

export const { setAppointments, clearAppointments, deleteAppointments } =
  appointmentsSlice.actions;

export default appointmentsSlice.reducer;
