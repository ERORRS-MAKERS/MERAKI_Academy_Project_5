import { configureStore } from "@reduxjs/toolkit";

import authReducer from './reducers/auth/index';
import prescriptionsReducer from './reducers/prescriptions/index';
import appointmentsReducer from './reducers/AppointmentsTableUser/index';
import hiringRequestReducer from './reducers/doctorsHiringRequest/index'
import pharmacistReducer from "./reducers/pharmacist/index";


export default configureStore({
  reducer: {
    auth: authReducer,
    prescriptions: prescriptionsReducer,
    appointments: appointmentsReducer, 
    hiringRequest:hiringRequestReducer,
    pharmacist: pharmacistReducer,

  },
});
