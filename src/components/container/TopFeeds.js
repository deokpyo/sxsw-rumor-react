import React, { Component } from "react";

export default class TopFeeds extends Component {
  render() {
    return (
      <div id="top-posts">
        <div>
          <div className="row">
            <div className="col s12">
              <h2>March 1st</h2>
            </div>
            <div className="col s1">
              <h3>1</h3>
            </div>
            <div className="col s11">
              <p>test</p>
              <h5 className="col s12 right-align legit-count">Legit count: 0</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
