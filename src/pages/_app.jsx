import App from "next/app";
import React from "react";

class Application extends App {
  render() {
    const { Component, store } = this.props;

    return <Component />;
  }
}

export default Application;
