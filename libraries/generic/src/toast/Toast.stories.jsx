import React, { useState } from "react";
import Toast from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
};

const Template = (args) => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => setVisible(false);

  return visible ? <Toast {...args} onClose={handleClose} /> : <div></div>;
};

export const Info = Template.bind({});
Info.args = {
  message: "This is an info toast",
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  message: "This is a success toast",
  type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "This is a warning toast",
  type: "warning",
};

export const Error = Template.bind({});
Error.args = {
  message: "This is an error toast",
  type: "error",
};
