import { createSlice } from '@reduxjs/toolkit';

export const hiringRequestSlice = createSlice({
  name: 'hiringRequest',
  initialState: {
    hiringRequest: [],
  },

  reducers: {
    sethiringRequest: (state, action) => {
      state.hiringRequest = action.payload;
    },
    updateHiringRequestById: (state, action) => {
      state.hiringRequest = state.hiringRequest.filter((element, index) => {
        return element.id !== action.payload.id;
      });
      /* state.hiringRequest = state.hiringRequest.map((element) => {
          if (action.payload.id === element.id) {
            element = action.payload;
          }
          return element;
        }); */
    },
  },
});

export const { sethiringRequest, updateHiringRequestById } =
  hiringRequestSlice.actions;

export default hiringRequestSlice.reducer;
