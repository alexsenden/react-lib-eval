import React from "react";
import Badge from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Badge",
  type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Badge",
  type: "primary",
};

export const Success = Template.bind({});
Success.args = {
  text: "Success Badge",
  type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Warning Badge",
  type: "warning",
};

export const Error = Template.bind({});
Error.args = {
  text: "Error Badge",
  type: "error",
};
