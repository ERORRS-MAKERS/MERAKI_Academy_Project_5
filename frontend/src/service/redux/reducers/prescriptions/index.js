import { createSlice } from '@reduxjs/toolkit';

export const prescriptionsSlice = createSlice({
  name: 'prescriptions',
  initialState: {
    prescription: [],
  },

  reducers: {
    setPrescriptions: (state, action) => {
      state.prescription = action.payload;
    },

    clearPrescriptions: (state) => {
      state.prescription = [];
    },
  },
});

export const { setPrescriptions, clearPrescriptions, setUpdatePrescriptions } =
  prescriptionsSlice.actions;

export default prescriptionsSlice.reducer;
