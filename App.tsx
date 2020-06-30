import React from "react";
import { configureStore, combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Home from "./src/components/Home";
import checkReducer from "./src/slices/checkSlice";

//                                     👇 indicate `state` construction
const rootReducer = combineReducers({ JSONPlaceholderAPI: checkReducer });

// Used in `useSelector` hook
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

/**
 * Getting the Dispatch type
 * {@link https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type}
 */
// export type AppDispatch = typeof store.dispatch;

// For async Actions
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
