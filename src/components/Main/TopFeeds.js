import React from "react";

const TopFeeds = props => {
  return (
    <div className="row">
      <div className="col s12">
        <h2>{props.feedDate}</h2>
      </div>
      <div className="col s1">
        <h3>{props.feedIndex}</h3>
      </div>
      <div className="col s11">
        <p>{props.feedText}</p>
        <h5 className="col s12 right-align legit-count">Legit count: {props.feedCount}</h5>
      </div>
    </div>
  );
};

export default TopFeeds;
