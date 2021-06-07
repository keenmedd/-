import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import doctorReducer from "./reducers/doctorSlice";

export default configureStore({
  reducer: {
    doctor: doctorReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: true,
});
