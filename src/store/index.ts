import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';

export const rootReducer = combineReducers({ user: userReducer });
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
