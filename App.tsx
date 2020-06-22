import React from "react";
import Home from "./src/components/Home";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./src/slices/userSlice";

const store = configureStore({
  reducer: userReducer,
});

import { Server } from "miragejs";

new Server({
  routes() {
    this.namespace = "/api";

    this.get("/users", () => [
      { id: "1", name: "Luke", completed: false },
      { id: "2", name: "Leah", completed: false },
      { id: "3", name: "Anakin", completed: false },
    ]);
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
