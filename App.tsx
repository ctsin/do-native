import React from "react";
import { Server } from "miragejs";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Home from "./src/components/Home";
import checkReducer from "./src/slices/checkSlice";
import { Check } from "./src/interfaces/check.interface";

const store = configureStore({
  reducer: checkReducer,
});

new Server({
  routes() {
    this.namespace = "/api";

    this.get("/check", (): Check => ({ checked: true }));
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
