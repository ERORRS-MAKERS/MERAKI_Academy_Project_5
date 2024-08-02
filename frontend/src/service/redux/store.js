import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth/index';
import prescriptionsReducer from './reducers/prescriptions/index';
import appointmentsReducer from './reducers/AppointmentsTableUser/index';

export default configureStore({
  reducer: {
    auth: authReducer,
    prescriptions: prescriptionsReducer,
    appointments: appointmentsReducer,
  },
});
