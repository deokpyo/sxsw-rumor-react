import React from "react";

const Title = (props) => {
  return (
    <div className="row">
      <div className="grid-example col s12 center-align">
        <span className="flow-text">{props.text}</span>
      </div>
    </div>
  );
};

export default Title;
