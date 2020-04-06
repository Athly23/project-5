import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button.js";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Do something" type="primary" />)
  .add("Hollow Primary", () => (
    <Button label="Do something" type="hollow-primary" />
  ))
  .add("Light Primary", () => (
    <Button label="Do something" type="light-primary" />
  ))
  .add("Danger", () => <Button label="Do something" type="danger" />)
  .add("Hollow Danger", () => (
    <Button label="Do something" type="hollow-danger" />
  ))
  .add("Light Danger", () => (
    <Button label="Do something" type="light-danger" />
  ))
  .add("Success", () => <Button label="Do something" type="success" />)
  .add("Hollow Success", () => (
    <Button label="Do something" type="hollow-success" />
  ))
  .add("Light Success", () => (
    <Button label="Do something" type="light-success" />
  ))
  .add("Warning", () => <Button label="Do something" type="warning" />)
  .add("Hollow Warning", () => (
    <Button label="Do something" type="hollow-warning" />
  ))
  .add("light Warning", () => (
    <Button label="Do something" type="light-warning" />
  ))
  .add("Default", () => <Button label="Do something" type="default" />)
  .add("Hollow Default", () => (
    <Button label="Do something" type="hollow-default" />
  ))
  .add("Light Default", () => (
    <Button label="Do something" type="light-default" />
  ))
  .add("Large Primary", () => (
    <Button label="Do something" type="primary" large />
  ))
  .add("Large Hollow Primary", () => (
    <Button label="Do something" type="hollow-primary" large />
  ))
  .add("Large Light Primary", () => (
    <Button label="Do something" type="light-primary" large />
  ))
  .add("Large Danger", () => (
    <Button label="Do something" type="danger" large />
  ))
  .add("Large Hollow Danger", () => (
    <Button label="Do something" type="hollow-danger" large />
  ))
  .add("Large Light Danger", () => (
    <Button label="Do something" type="light-danger" large />
  ))
  .add("Large Success", () => (
    <Button label="Do something" type="success" large />
  ))
  .add("Large Hollow Success", () => (
    <Button label="Do something" type="hollow-success" large />
  ))
  .add("Large Light Success", () => (
    <Button label="Do something" type="light-success" large />
  ))
  .add("Large Warning", () => (
    <Button label="Do something" type="warning" large />
  ))
  .add("Large Hollow Warning", () => (
    <Button label="Do something" type="hollow-warning" large />
  ))
  .add("Large Light Warning", () => (
    <Button label="Do something" type="light-warning" large />
  ))
  .add("Large Default", () => (
    <Button label="Do something" type="default" large />
  ))
  .add("Large Hollow Default", () => (
    <Button label="Do something" type="hollow-default" large />
  ))
  .add("Large Light Default", () => (
    <Button label="Do something" type="light-default" large />
  ))
  .add("Add to Cart", () => <Button label="Add to Cart" type="cart-and-text" />)
  .add("Add to Favorites", () => <Button type="cart-and-favorites" />)
  .add("Cart", () => <Button type="cart-icon" />)
  .add("Heart", () => <Button type="heart-icon" />);

storiesOf("Forms", module);
