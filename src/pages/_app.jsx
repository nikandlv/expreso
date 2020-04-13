import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import Store from "../redux/Store";
import withRedux from "next-redux-wrapper";

class Application extends App {
  render() {
    const { Component, store } = this.props;

    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  }
}

const makeStore = () => Store;

export default withRedux(makeStore)(Application);
