import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Default Input",
  value: "",
  placeholder: "Enter text...",
  onChange: () => {},
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  label: "Input with Initial Value",
  value: "Initial Value",
  placeholder: "Placeholder text...",
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Input",
  value: "",
  placeholder: "Cannot enter text...",
  onChange: () => {},
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Input with Label",
  value: "",
  placeholder: "Enter text...",
  onChange: () => {},
};
