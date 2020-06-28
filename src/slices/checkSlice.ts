import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Check } from "../interfaces/check.interface";
import { AppThunk } from "../../App";

const initialState: Check = { checked: false };

const checkSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    getCheckStatus(state, { payload: { checked } }: PayloadAction<Check>) {
      state.checked = checked;
    },
  },
});

export const { getCheckStatus } = checkSlice.actions;

export default checkSlice.reducer;

export const fetchCheckStatus = (): AppThunk => async (dispatch) => {
  try {
    const checkboxStatus: Check = await fetch("/api/check").then((r) => r.json());

    dispatch(getCheckStatus(checkboxStatus));
  } catch {
    throw new Error("Oops!");
  }
};
