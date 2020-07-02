import { User } from '../interfaces/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { getUser } from '../services';

interface UserState {
  details: User;
}

const initialState: UserState = {
  details: { name: '', userId: '', active: false },
};

const userSlice = createSlice({
  name: 'User details',
  initialState,
  reducers: {
    getUserSuccess(state, { payload }: PayloadAction<User>) {
      state.details = payload;
    },
    getUserFail(state, { payload }: PayloadAction<string>) {
      console.log(`Oops! ${payload} occurred -_-!`);
    },
  },
});

const { getUserSuccess, getUserFail } = userSlice.actions;

export default userSlice.reducer;

export const fetchUser = (userId: string): AppThunk => async (dispatch) => {
  try {
    const user = await getUser(userId);

    dispatch(getUserSuccess(user));
  } catch (err) {
    dispatch(getUserFail(err));
  }
};
