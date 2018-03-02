import React from "react";

const Button = props => {
  return (
    <button id={props.btnId} class={props.btnClass} data-key={props.btnKey}>
      {props.btnText}
    </button>
  );
};

export default Button;
