import React from "react";
import { MyComponent, MyComponentProps } from "./MyComponent";

export default {
  title: "MyComponent!",
  component: MyComponent,
};

export const Basic = (props: MyComponentProps) => (
  <MyComponent title="Test" selected={true} />
);
