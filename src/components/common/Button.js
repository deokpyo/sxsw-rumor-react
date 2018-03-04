import React from "react";

const Button = props => {
  return (
    <button id={props.btnId} className={props.btnClass} data-key={props.btnKey} onClick={props.btnClick}>
      {props.btnText}
    </button>
  );
};

export default Button;
