import { createSlice } from "@reduxjs/toolkit";

export const nameUserSlice = createSlice({
  name: "nameUser",
  initialState: "",
  reducers: {
    nameUserGlobal: (state, action) => action.payload,
  },
});

export const { nameUserGlobal } = nameUserSlice.actions;

export default nameUserSlice.reducer;
