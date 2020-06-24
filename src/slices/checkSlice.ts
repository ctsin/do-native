import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
  name: "checkbox",
  initialState: {},
  reducers: {
    getCheckStatus(state, action) {
      state.checked = action.payload.checked
    },
    setCheckStatus(state, action) {},
  },
});

export const { getCheckStatus, setCheckStatus } = checkSlice.actions;

export default checkSlice.reducer;

export const fetchCheckStatus = () => async (dispatch) => {
  try {
    const checkboxStatus = await fetch("/api/check").then((r) => r.json());

    dispatch(getCheckStatus(checkboxStatus));
  } catch {
    throw new Error("Oops!");
  }
};
