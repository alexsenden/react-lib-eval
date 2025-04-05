import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Button",
  type: "default",
  onClick: () => alert("Default Button clicked"),
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  type: "primary",
  onClick: () => alert("Primary Button clicked"),
};

export const Success = Template.bind({});
Success.args = {
  text: "Success Button",
  type: "success",
  onClick: () => alert("Success Button clicked"),
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Warning Button",
  type: "warning",
  onClick: () => alert("Warning Button clicked"),
};

export const Error = Template.bind({});
Error.args = {
  text: "Error Button",
  type: "error",
  onClick: () => alert("Error Button clicked"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Button",
  type: "default",
  onClick: () => alert("Disabled Button clicked"),
  disabled: true,
};
