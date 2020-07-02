import React from "react";
import { configureStore, combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Home from "./src/components/Home";
import server from "./server";

server();

const store = configureStore({
  reducer: {},
});

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
