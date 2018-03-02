import React, { Component } from "react";
import { TopFeeds, Feed } from "./index";
import { Title } from "../presentational";

export default class Main extends Component {
  render() {
    return (
      <div className="container" id="main">
        <Title text={"Top Rumors"} />
        <TopFeeds />
        <div className="divider" ></div>
        <Title text="Feed" />
        <Feed />
      </div>
    );
  }
}
