import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Check } from "../interfaces/check.interface";
import { AppThunk } from "../../App";

const initialState: Check = false;

const checkSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    /**
     * ! Issues: if the initState is not a object, it should renturn the computed state,
     * ! instead of updating the object by using Immer under the hook.
     *
     * Example
     * {@link https://redux-toolkit.js.org/api/createSlice#reducers}
     */
    getCheckStatus: (state, { payload }: PayloadAction<Check>) => (state = payload),
  },
});

const { getCheckStatus } = checkSlice.actions;

export default checkSlice.reducer;

export const fetchCheckStatus = (): AppThunk => async (dispatch) => {
  try {
    const { checked }: { checked: Check } = await fetch("/api/check").then((r) => r.json());

    dispatch(getCheckStatus(checked));
  } catch {
    throw new Error("Oops!");
  }
};
