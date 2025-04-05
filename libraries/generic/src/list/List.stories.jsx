import React from "react";
import List from "./List";

export default {
  title: "Components/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const Unordered = Template.bind({});
Unordered.args = {
  items: ["Item 1", "Item 2", "Item 3"],
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};
