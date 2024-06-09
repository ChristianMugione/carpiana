import { configureStore } from "@reduxjs/toolkit";
import { statusSlice } from "./slices";

export const store = configureStore({
  reducer: { status: statusSlice.reducer },
});
