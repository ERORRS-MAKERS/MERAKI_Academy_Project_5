import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth/index";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
