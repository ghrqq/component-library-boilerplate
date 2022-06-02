
import React from "react";
import HelloWorld, { HelloWorldInterface } from "./HelloWorld";
export default {
  title: "HelloWorld",
  component: HelloWorld,
};
export const Default = (args: HelloWorldInterface) => <HelloWorld {...args} />;
