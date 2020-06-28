import React from "react";
import { Server } from "miragejs";
import { configureStore, combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Home from "./src/components/Home";
import checkReducer from "./src/slices/checkSlice";
import { Check } from "./src/interfaces/check.interface";

//                                     👇 indicate `state` construction
const rootReducer = combineReducers({ check: checkReducer });

// Used in `useSelector` hook
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

// Have no idea on where it will be used
export type AppDispatch = typeof store.dispatch;

// For async Actions
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

new Server({
  routes() {
    this.namespace = "/api";

    this.get("/check", (): Check => ({ checked: false }));
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
