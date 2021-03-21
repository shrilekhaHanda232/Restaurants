import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./Services/Store";
import MainContainer from "./Containers/mainContainer";

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
