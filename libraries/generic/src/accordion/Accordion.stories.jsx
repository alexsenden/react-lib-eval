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
    { title: "Item 1", content: <p>"Content for item 1"</p> },
    { title: "Item 2", content: <p>"Content for item 2"</p> },
    { title: "Item 3", content: <p>"Content for item 3"</p> },
  ],
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [{ title: "Single Item", content: <p>"Content for the single item"</p> }],
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  items: [
    { title: "Item 1", content: <p>"Content for item 1"</p> },
    { title: "Item 2", content: <p>"Content for item 2"</p> },
    { title: "Item 3", content: <p>"Content for item 3"</p> },
    { title: "Item 4", content: <p>"Content for item 4"</p> },
    { title: "Item 5", content: <p>"Content for item 5"</p> },
  ],
};
