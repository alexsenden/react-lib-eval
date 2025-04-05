import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: "Unchecked Checkbox",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked Checkbox",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Checkbox",
  checked: false,
  disabled: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  checked: false,
};

export const HasOnChange = Template.bind({});
HasOnChange.args = {
  label: "Has OnChange",
  checked: false,
  onChange: () => alert("Checkbox state changed"),
};
