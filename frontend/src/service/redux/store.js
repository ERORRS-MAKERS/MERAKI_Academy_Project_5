import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth/auth';

export default configureStore({
  reducer: {
    authReducer: authReducer,
  },
});
