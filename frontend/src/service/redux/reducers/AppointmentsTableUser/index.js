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

    updateAppointments: (state, action) => {
      state.appointment = state.appointment.map((element) => {
        if (action.payload.id === element.id) {
          element = action.payload;
        }
        return element;
      });
    },

    clearAppointments: (state) => {
      state.appointment = [];
    },
  },
});

export const {
  setAppointments,
  clearAppointments,
  deleteAppointments,
  updateAppointments,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
