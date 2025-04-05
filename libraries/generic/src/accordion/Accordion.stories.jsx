import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: "Item 1", content: "Content for item 1" },
    { title: "Item 2", content: "Content for item 2" },
    { title: "Item 3", content: "Content for item 3" },
  ],
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [{ title: "Single Item", content: "Content for the single item" }],
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  items: [
    { title: "Item 1", content: "Content for item 1" },
    { title: "Item 2", content: "Content for item 2" },
    { title: "Item 3", content: "Content for item 3" },
    { title: "Item 4", content: "Content for item 4" },
    { title: "Item 5", content: "Content for item 5" },
  ],
};
