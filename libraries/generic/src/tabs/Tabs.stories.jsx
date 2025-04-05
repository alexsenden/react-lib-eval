import React from "react";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: "Tab 1", content: "Content for Tab 1" },
    { label: "Tab 2", content: "Content for Tab 2" },
    { label: "Tab 3", content: "Content for Tab 3" },
  ],
};

export const SingleTab = Template.bind({});
SingleTab.args = {
  tabs: [{ label: "Single Tab", content: "Content for Single Tab" }],
};
