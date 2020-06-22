import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interfaces/user.interface";

let result: User[];

const fetchUser = async () => {
  const res = await fetch("/api/users");
  result = await res.json();
};

fetchUser();

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    toggleUser(state: User[], action) {
      const user = state.find((user) => user.id === action.payload);
      if (user) {
        user.completed = !user.completed;
      }
    },
  },
});

export const { toggleUser } = userSlice.actions;

export default userSlice.reducer;
