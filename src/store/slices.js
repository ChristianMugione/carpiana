import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userMenuShow: false,
  mainMenuShow: false,
};

export const statusSlice = createSlice({
  name: "appStatus",
  initialState,
  reducers: {
    userMenuShowTogle: (state) => {
      state.userMenuShow = !state.userMenuShow;
    },
    userMenuShowTrue: (state) => {
      state.userMenuShow = true;
    },
    userMenuShowFalse: (state) => {
      state.userMenuShow = false;
    },
    mainMenuShowTogle: (state) => {
      state.mainMenuShow = !state.mainMenuShow;
    },
    mainMenuShowTrue: (state) => {
      state.mainMenuShow = true;
    },
    mainMenuShowFalse: (state) => {
      state.mainMenuShow = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  userMenuShowTogle,
  userMenuShowTrue,
  userMenuShowFalse,
  mainMenuShowTogle,
  mainMenuShowTrue,
  mainMenuShowFalse,
} = statusSlice.actions;

export default statusSlice.reducer;
