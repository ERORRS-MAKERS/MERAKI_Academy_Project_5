import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    time: '',
    department_name: '',
    user_id: '',
    notes: '',
  },

  reducers: {
    setData: (state, action) => {
        state.time=action.payload.time
        state.department_name=action.payload.department_name
        state.user_id=action.payload.user_id
        state.notes=action.payload.notes


    },

  
  },
});

export const { setData } = notificationSlice.actions;

export default notificationSlice.reducer;
