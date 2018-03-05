import React from "react";
import { Button } from "../common";

const Feed = props => {
  return (
    <div className="row" id={props.feedKey}>
      <div className="col s12">
        <h2>{props.feedDate}</h2>
        <p>{props.feedText}</p>
      </div>
      <div className="col s12 right-align">
        <Button
          btnClass="btn-legit"
          btnId=""
          btnKey={props.feedKey}
          btnText="LEGIT"
          btnClick={props.onClickFeedBtn}
        />
        <Button
          btnClass="btn-shit"
          btnId=""
          btnKey={props.feedKey}
          btnText="SHIT"
          btnClick={props.onClickFeedBtn}
        />
      </div>
    </div>
  );
};

export default Feed;
