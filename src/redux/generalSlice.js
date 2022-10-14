import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "hello wrold",
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    handleInputValue(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export default generalSlice.reducer;
export const { handleInputValue } = generalSlice.actions;
