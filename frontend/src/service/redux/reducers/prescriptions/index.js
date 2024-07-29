import { createSlice } from '@reduxjs/toolkit';

export const prescriptionsSlice = createSlice({
  name: 'prescriptions',
  initialState: {
    prescription: [],
  },

  reducers: {
    setPrescriptions: (state, action) => {
      state.prescription = action.payload;
      console.log('redux', action.payload);
    },

    clearPrescriptions: (state) => {
      state.prescription = [];
    },
  },
});

export const { setPrescriptions, clearPrescriptions } =
  prescriptionsSlice.actions;

export default prescriptionsSlice.reducer;
