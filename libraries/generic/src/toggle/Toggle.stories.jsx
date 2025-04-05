import React from "react";
import Toggle from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ActiveByDefault = Template.bind({});
ActiveByDefault.args = { isActive: true };
