import React from "react";
import ProgressBar from "./ProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const ZeroProgress = Template.bind({});
ZeroProgress.args = {
  progress: 0,
};

export const HalfProgress = Template.bind({});
HalfProgress.args = {
  progress: 50,
};

export const FullProgress = Template.bind({});
FullProgress.args = {
  progress: 100,
};
