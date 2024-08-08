import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    time: '',
    department_name: '',
    user_id: '',
    notes: '',
    department_id:''
  },

  reducers: {
    setData: (state, action) => {
        state.time=action.payload.time
        state.department_name=action.payload.department_name
        state.user_id=action.payload.user_id
        state.notes=action.payload.notes
        state.department_id=action.payload.department_id


    },

  
  },
});

export const { setData } = notificationSlice.actions;

export default notificationSlice.reducer;
