import React from "react";
import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: "info",
  message: "This is an info alert",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  message: "This is a success alert",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  message: "This is a warning alert",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  message: "This is an error alert",
};

export const Closable = Template.bind({});
Closable.args = {
  type: "info",
  message: "This is a closable alert",
  onClose: () => alert("Alert closed"),
};
