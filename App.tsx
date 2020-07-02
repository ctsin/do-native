import React from "react";
import { Provider } from "react-redux";
import Home from "./src/components/Home";
import server from "./server";
import { store } from "./src/store";

server();

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
