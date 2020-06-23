import React from "react";
import { Server } from "miragejs";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Home from "./src/components/Home";
import checkReducer from "./src/slices/checkSlice";

const store = configureStore({
  reducer: checkReducer,
});

new Server({
  routes() {
    this.namespace = "/api";

    this.get("/check", () => ({ checked: true }));
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
