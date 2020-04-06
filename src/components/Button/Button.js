import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  let classList = "";

  let types = [
    "primary",
    "danger",
    "success",
    "warning",
    "default",
    "hollow-primary",
    "hollow-danger",
    "hollow-success",
    "hollow-warning",
    "hollow-default",
    "light-primary",
    "light-danger",
    "light-success",
    "light-warning",
    "light-default",
    "cart-and-text",
    "cart-and-favorites",
    "cart-icon",
    "heart-icon",
  ];

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  if (props.large) {
    classList += ` button-large`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
