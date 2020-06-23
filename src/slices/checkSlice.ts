import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
  name: "checkbox",
  initialState: { checked: false },
  reducers: {
    getCheckStatus(state, action) {},
    setCheckStatus(state, action) {},
  },
});

export const { getCheckStatus, setCheckStatus } = checkSlice.actions;

export default checkSlice.reducer;

export const fetchCheckStatus = () => async (dispatch) => {
  try {
    const checkStatus = await fetch("/api/check").then((r) => r.json());
    dispatch(getCheckStatus(checkStatus));
  } catch {
    throw new Error("Oops!");
  }
};
